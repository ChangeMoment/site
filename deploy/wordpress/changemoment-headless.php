<?php
/**
 * Plugin Name: ChangeMoment Headless Blog
 * Description: Three-language editorial fields plus sanitized blog and contact REST contracts for the ChangeMoment frontend.
 * Version: 1.2.0
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
        'http://15-156-55-113.nip.io',
    ];
    $home_parts = wp_parse_url(home_url());
    if (!empty($home_parts['scheme']) && !empty($home_parts['host'])) {
        $home_origin = $home_parts['scheme'] . '://' . $home_parts['host'];
        if (!empty($home_parts['port'])) $home_origin .= ':' . intval($home_parts['port']);
        $origins[] = $home_origin;
    }
    return array_unique($origins);
}

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

add_action('add_meta_boxes', function () {
    add_meta_box('cm_translations', 'ChangeMoment translations', function ($post) {
        wp_nonce_field('cm_save_translations', 'cm_translations_nonce');
        foreach (CM_META_FIELDS as $key => $label) {
            $value = get_post_meta($post->ID, '_cm_' . $key, true);
            echo '<p><label for="cm_' . esc_attr($key) . '"><strong>' . esc_html($label) . '</strong></label></p>';
            if (str_starts_with($key, 'content_')) {
                wp_editor($value, 'cm_' . $key, ['textarea_name' => 'cm_' . $key, 'textarea_rows' => 12]);
            } else {
                echo '<input class="widefat" id="cm_' . esc_attr($key) . '" name="cm_' . esc_attr($key) . '" value="' . esc_attr($value) . '">';
            }
        }
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
                        'fr' => get_post_meta($post->ID, '_cm_excerpt_fr', true),
                        'fa' => get_post_meta($post->ID, '_cm_excerpt_fa', true),
                    ],
                    'contentHtml' => [
                        'en' => wp_kses_post(apply_filters('the_content', $post->post_content)),
                        'fr' => wp_kses_post(get_post_meta($post->ID, '_cm_content_fr', true)),
                        'fa' => wp_kses_post(get_post_meta($post->ID, '_cm_content_fa', true)),
                    ],
                    'featuredImage' => get_the_post_thumbnail_url($post, 'full') ?: '',
                    'tags' => is_array($tags) ? $tags : [],
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

// A publish only writes a marker. A locked systemd job performs the build as a
// non-web user, so editable post content can never become a shell command.
add_action('transition_post_status', function ($new_status, $old_status, $post) {
    if ($post->post_type !== 'post' || $new_status !== 'publish') return;
    $marker = '/var/lib/changemoment/rebuild-requested';
    if (is_dir(dirname($marker)) && is_writable(dirname($marker))) {
        file_put_contents($marker, gmdate('c') . "\n", LOCK_EX);
    }
}, 10, 3);
