<?php
/**
 * Plugin Name: ChangeMoment Headless Blog
 * Description: Three-language editorial fields plus sanitized blog and contact REST contracts for the ChangeMoment frontend.
 * Version: 1.3.1
 */

if (!defined('ABSPATH')) { exit; }

const CM_META_FIELDS = [
    'title_fr' => 'French title', 'excerpt_fr' => 'French excerpt', 'content_fr' => 'French content',
    'title_fa' => 'Persian title', 'excerpt_fa' => 'Persian excerpt', 'content_fa' => 'Persian content',
    'category' => 'Frontend category', 'read_minutes' => 'Reading time (minutes)',
];

const CM_RESEND_ENDPOINT = 'https://api.resend.com/emails';
const CM_ENV_FILE = '/etc/changemoment/.env';

function cm_env_value($name) {
    static $file_values = null;

    $runtime_value = getenv($name);
    if ($runtime_value !== false && trim((string) $runtime_value) !== '') {
        return trim((string) $runtime_value);
    }

    if ($file_values === null) {
        $file_values = [];
        if (is_readable(CM_ENV_FILE)) {
            $parsed = @parse_ini_file(CM_ENV_FILE, false, INI_SCANNER_RAW);
            if (is_array($parsed)) $file_values = $parsed;
        }
    }

    return isset($file_values[$name]) ? trim((string) $file_values[$name]) : '';
}

function cm_send_contact_via_resend($subject, $body, $reply_to) {
    $api_key = cm_env_value('RESEND_API_KEY');
    if (!$api_key || !preg_match('/^re_[A-Za-z0-9_-]+$/', $api_key)) {
        error_log('ChangeMoment contact: Resend is not configured.');
        return false;
    }

    $payload = wp_json_encode([
        'from' => 'ChangeMoment Website <website@changemoment.ca>',
        'to' => ['info@changemoment.ca'],
        'reply_to' => $reply_to,
        'subject' => $subject,
        'text' => $body,
        'tags' => [
            ['name' => 'source', 'value' => 'contact-form'],
        ],
    ]);
    if (!$payload) return false;

    $result = wp_remote_post(CM_RESEND_ENDPOINT, [
        'timeout' => 15,
        'redirection' => 0,
        'reject_unsafe_urls' => true,
        'headers' => [
            'Authorization' => 'Bearer ' . $api_key,
            'Content-Type' => 'application/json',
            'Idempotency-Key' => wp_generate_uuid4(),
        ],
        'body' => $payload,
    ]);

    if (is_wp_error($result)) {
        error_log('ChangeMoment contact: Resend transport failed (' . sanitize_key($result->get_error_code()) . ').');
        return false;
    }

    $status = wp_remote_retrieve_response_code($result);
    if ($status < 200 || $status >= 300) {
        error_log('ChangeMoment contact: Resend returned HTTP ' . intval($status) . '.');
        return false;
    }

    $response = json_decode(wp_remote_retrieve_body($result), true);
    return is_array($response) && !empty($response['id']);
}

function cm_contact_allowed_origins() {
    $origins = [
        'https://changemoment.ca',
        'https://www.changemoment.ca',
    ];
    $home_parts = wp_parse_url(home_url());
    if (!empty($home_parts['scheme']) && !empty($home_parts['host'])) {
        $home_origin = $home_parts['scheme'] . '://' . $home_parts['host'];
        if (!empty($home_parts['port'])) $home_origin .= ':' . intval($home_parts['port']);
        $origins[] = $home_origin;
    }
    return array_unique($origins);
}

// The public headless frontend never consumes WordPress author accounts.
// Keep authenticated wp-admin/REST access intact while preventing anonymous
// username enumeration through the core users endpoints.
add_filter('rest_endpoints', function ($endpoints) {
    if (is_user_logged_in()) return $endpoints;
    foreach (array_keys($endpoints) as $route) {
        if ($route === '/wp/v2/users' || str_starts_with($route, '/wp/v2/users/')) {
            unset($endpoints[$route]);
        }
    }
    return $endpoints;
});

// Apache denies xmlrpc.php as the primary control; this keeps the application
// layer fail-closed if the web-server rule is ever removed accidentally.
add_filter('xmlrpc_enabled', '__return_false');

function cm_contact_response($data, $status) {
    $response = new WP_REST_Response($data, $status);
    $response->header('Cache-Control', 'no-store');
    return $response;
}

function cm_submit_contact(WP_REST_Request $request) {
    $origin = untrailingslashit((string) $request->get_header('origin'));
    if (!$origin || !in_array($origin, cm_contact_allowed_origins(), true)) {
        return cm_contact_response(['code' => 'origin_not_allowed'], 403);
    }

    $params = $request->get_json_params();
    if (!is_array($params)) {
        return cm_contact_response(['code' => 'invalid_request'], 400);
    }

    // A filled honeypot is acknowledged without sending mail so bots receive no signal.
    if (!empty($params['website'])) {
        return cm_contact_response(['accepted' => true], 202);
    }

    $name = sanitize_text_field($params['name'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $phone = sanitize_text_field($params['phone'] ?? '');
    $language = sanitize_key($params['language'] ?? 'en');
    $message = sanitize_textarea_field($params['message'] ?? '');

    if (!$name || !$email || !is_email($email) || !$message) {
        return cm_contact_response(['code' => 'invalid_fields'], 400);
    }
    if (mb_strlen($name) > 120 || mb_strlen($email) > 254 || mb_strlen($phone) > 50 || mb_strlen($message) > 5000) {
        return cm_contact_response(['code' => 'invalid_fields'], 400);
    }
    if (!in_array($language, ['en', 'fr', 'fa'], true)) $language = 'en';

    $remote_address = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : 'unknown';
    $rate_key = 'cm_contact_' . hash_hmac('sha256', $remote_address, wp_salt('nonce'));
    $attempts = intval(get_transient($rate_key));
    if ($attempts >= 5) {
        return cm_contact_response(['code' => 'rate_limited'], 429);
    }
    set_transient($rate_key, $attempts + 1, HOUR_IN_SECONDS);

    $subject = sprintf('[ChangeMoment website] New %s message', strtoupper($language));
    $body = implode("\n", [
        'A new message was submitted through changemoment.ca.',
        '',
        'Name: ' . $name,
        'Email: ' . $email,
        'Phone: ' . ($phone ?: 'Not provided'),
        'Preferred language: ' . strtoupper($language),
        '',
        'Message:',
        $message,
    ]);
    if (!cm_send_contact_via_resend($subject, $body, $name . ' <' . $email . '>')) {
        return cm_contact_response(['code' => 'delivery_failed'], 502);
    }

    return cm_contact_response(['accepted' => true], 202);
}

function cm_localized_excerpt($post_id, $lang) {
    $excerpt = trim((string) get_post_meta($post_id, '_cm_excerpt_' . $lang, true));
    if ($excerpt !== '') return $excerpt;

    $title = trim(wp_strip_all_tags((string) get_post_meta($post_id, '_cm_title_' . $lang, true)));
    $content = trim(wp_strip_all_tags((string) get_post_meta($post_id, '_cm_content_' . $lang, true)));
    if ($title === '' || $content === '') return '';

    return wp_trim_words($content, 32, '…');
}

function cm_translation_state($post_id, $lang) {
    $values = [
        get_post_meta($post_id, '_cm_title_' . $lang, true),
        cm_localized_excerpt($post_id, $lang),
        get_post_meta($post_id, '_cm_content_' . $lang, true),
    ];
    $completed = count(array_filter($values, function ($value) {
        return trim(wp_strip_all_tags((string) $value)) !== '';
    }));
    if ($completed === count($values)) return 'complete';
    if ($completed > 0) return 'incomplete';
    return 'empty';
}

function cm_translation_badge($state) {
    $labels = [
        'complete' => ['Complete — visible on the website', '#0a6b36', '#dff5e7'],
        'incomplete' => ['Incomplete — not visible yet', '#8a4b00', '#fff2cc'],
        'empty' => ['Not started — English only', '#50575e', '#f0f0f1'],
    ];
    [$label, $color, $background] = $labels[$state] ?? $labels['empty'];
    return '<span class="cm-language-status" style="color:' . esc_attr($color) . ';background:' . esc_attr($background) . '">' . esc_html($label) . '</span>';
}

add_action('add_meta_boxes', function () {
    add_meta_box('cm_translations', 'ChangeMoment: French and Persian versions', function ($post) {
        wp_nonce_field('cm_save_translations', 'cm_translations_nonce');
        echo '<style>
            .cm-editor-guide{padding:14px 16px;margin:0 0 18px;border-left:4px solid #2271b1;background:#f0f6fc;line-height:1.55}
            .cm-language-panel{margin:18px 0;padding:18px;border:1px solid #dcdcde;border-radius:8px;background:#fff}
            .cm-language-panel[dir="rtl"]{text-align:right}
            .cm-language-heading{display:flex;gap:10px;align-items:center;justify-content:space-between;margin:0 0 8px}
            .cm-language-heading h3{margin:0;font-size:17px}
            .cm-language-status{display:inline-block;padding:4px 9px;border-radius:999px;font-size:12px;font-weight:600}
            .cm-field{margin:16px 0}.cm-field label{display:block;margin-bottom:6px;font-weight:600}
            .cm-field textarea{min-height:80px}.cm-settings{display:grid;grid-template-columns:2fr 1fr;gap:16px}
            @media(max-width:782px){.cm-language-heading{align-items:flex-start;flex-direction:column}.cm-settings{grid-template-columns:1fr}}
        </style>';
        echo '<div class="cm-editor-guide"><strong>How languages work:</strong> Write the English version in the normal WordPress title, excerpt, and editor above. A French or Persian page appears only when all three fields for that language are complete. You can safely save a partial translation; the complete languages will continue to publish.</div>';

        $languages = [
            'fr' => ['French version', 'ltr', 'French'],
            'fa' => ['Persian version', 'rtl', 'Persian'],
        ];
        foreach ($languages as $lang => [$heading, $direction, $name]) {
            $title = get_post_meta($post->ID, '_cm_title_' . $lang, true);
            $excerpt = get_post_meta($post->ID, '_cm_excerpt_' . $lang, true);
            $content = get_post_meta($post->ID, '_cm_content_' . $lang, true);
            echo '<section class="cm-language-panel" dir="' . esc_attr($direction) . '">';
            echo '<div class="cm-language-heading"><h3>' . esc_html($heading) . '</h3>' . cm_translation_badge(cm_translation_state($post->ID, $lang)) . '</div>';
            echo '<p>Complete the title and article body to publish the ' . esc_html($name) . ' page. The short excerpt is optional and will be generated from the article body when left blank.</p>';
            echo '<div class="cm-field"><label for="cm_title_' . esc_attr($lang) . '">' . esc_html($name) . ' title</label>';
            echo '<input class="widefat" id="cm_title_' . esc_attr($lang) . '" name="cm_title_' . esc_attr($lang) . '" value="' . esc_attr($title) . '"></div>';
            echo '<div class="cm-field"><label for="cm_excerpt_' . esc_attr($lang) . '">' . esc_html($name) . ' short excerpt (optional)</label>';
            echo '<textarea class="widefat" id="cm_excerpt_' . esc_attr($lang) . '" name="cm_excerpt_' . esc_attr($lang) . '" rows="3">' . esc_textarea($excerpt) . '</textarea></div>';
            echo '<div class="cm-field"><label for="cm_content_' . esc_attr($lang) . '">' . esc_html($name) . ' article body</label>';
            wp_editor($content, 'cm_content_' . $lang, [
                'textarea_name' => 'cm_content_' . $lang,
                'textarea_rows' => 16,
                'media_buttons' => true,
                'tinymce' => ['directionality' => $direction],
            ]);
            echo '</div></section>';
        }

        $category = get_post_meta($post->ID, '_cm_category', true) ?: 'education';
        $read_minutes = max(1, intval(get_post_meta($post->ID, '_cm_read_minutes', true) ?: 5));
        echo '<section class="cm-language-panel"><h3>Website card settings</h3><div class="cm-settings">';
        echo '<div class="cm-field"><label for="cm_category">Frontend category</label><input class="widefat" id="cm_category" name="cm_category" value="' . esc_attr($category) . '"></div>';
        echo '<div class="cm-field"><label for="cm_read_minutes">Reading time (minutes)</label><input class="widefat" type="number" min="1" max="120" id="cm_read_minutes" name="cm_read_minutes" value="' . esc_attr($read_minutes) . '"></div>';
        echo '</div></section>';
    }, 'post', 'normal', 'high');
});

add_action('save_post', function ($post_id) {
    if (!isset($_POST['cm_translations_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['cm_translations_nonce'])), 'cm_save_translations')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    foreach (CM_META_FIELDS as $key => $_label) {
        if (!isset($_POST['cm_' . $key])) continue;
        $raw = wp_unslash($_POST['cm_' . $key]);
        $value = str_starts_with($key, 'content_') ? wp_kses_post($raw) : sanitize_text_field($raw);
        update_post_meta($post_id, '_cm_' . $key, $value);
    }
});

function cm_request_frontend_rebuild($post_id = 0) {
    $marker = '/var/lib/changemoment/rebuild-requested';
    if (!is_dir(dirname($marker)) || !is_writable(dirname($marker))) {
        error_log('ChangeMoment publish: rebuild queue is not writable.');
        return false;
    }
    $token = implode(' ', [gmdate('c'), intval($post_id), wp_generate_uuid4()]) . "\n";
    return file_put_contents($marker, $token, LOCK_EX) !== false;
}

// Rebuild after every save to an already-published article as well as the
// first publish. This covers translation edits, featured images, excerpts,
// Rank Math changes, tags, and ordinary article content.
add_action('save_post_post', function ($post_id, $post) {
    if ((defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || wp_is_post_revision($post_id)) return;
    if ($post->post_status === 'publish') cm_request_frontend_rebuild($post_id);
}, 30, 2);

function cm_rebuild_after_featured_image_change($meta_id, $post_id, $meta_key) {
    if ($meta_key !== '_thumbnail_id' || get_post_status($post_id) !== 'publish') return;
    cm_request_frontend_rebuild($post_id);
}
add_action('added_post_meta', 'cm_rebuild_after_featured_image_change', 10, 3);
add_action('updated_post_meta', 'cm_rebuild_after_featured_image_change', 10, 3);
add_action('deleted_post_meta', 'cm_rebuild_after_featured_image_change', 10, 3);

add_action('rest_api_init', function () {
    register_rest_route('changemoment/v1', '/posts', [
        'methods' => 'GET',
        'permission_callback' => '__return_true',
        'callback' => function () {
            $posts = get_posts(['post_status' => 'publish', 'numberposts' => -1, 'orderby' => 'date', 'order' => 'DESC']);
            return array_map(function ($post) {
                $tags = wp_get_post_tags($post->ID, ['fields' => 'names']);
                return [
                    'id' => $post->ID,
                    'slug' => $post->post_name,
                    'date' => get_the_date('c', $post),
                    'cmsPermalink' => get_permalink($post),
                    'category' => get_post_meta($post->ID, '_cm_category', true) ?: 'education',
                    'readMinutes' => max(1, intval(get_post_meta($post->ID, '_cm_read_minutes', true) ?: 5)),
                    'title' => [
                        'en' => get_the_title($post),
                        'fr' => get_post_meta($post->ID, '_cm_title_fr', true),
                        'fa' => get_post_meta($post->ID, '_cm_title_fa', true),
                    ],
                    'excerpt' => [
                        'en' => wp_strip_all_tags(get_the_excerpt($post)),
                        'fr' => cm_localized_excerpt($post->ID, 'fr'),
                        'fa' => cm_localized_excerpt($post->ID, 'fa'),
                    ],
                    'contentHtml' => [
                        'en' => wp_kses_post(apply_filters('the_content', $post->post_content)),
                        'fr' => wp_kses_post(get_post_meta($post->ID, '_cm_content_fr', true)),
                        'fa' => wp_kses_post(get_post_meta($post->ID, '_cm_content_fa', true)),
                    ],
                    'featuredImage' => get_the_post_thumbnail_url($post, 'full') ?: '',
                    'tags' => is_array($tags) ? $tags : [],
                    'translationStatus' => [
                        'en' => 'complete',
                        'fr' => cm_translation_state($post->ID, 'fr'),
                        'fa' => cm_translation_state($post->ID, 'fa'),
                    ],
                ];
            }, $posts);
        },
    ]);
    register_rest_route('changemoment/v1', '/contact', [
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => 'cm_submit_contact',
    ]);
});

// Removing a published article must also refresh the static website. Published
// saves are handled by save_post_post above.
add_action('transition_post_status', function ($new_status, $old_status, $post) {
    if ($post->post_type !== 'post' || $old_status !== 'publish' || $new_status === 'publish') return;
    cm_request_frontend_rebuild($post->ID);
}, 10, 3);
