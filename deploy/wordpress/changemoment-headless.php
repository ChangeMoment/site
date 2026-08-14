<?php
/**
 * Plugin Name: ChangeMoment Headless Blog
 * Description: Three-language editorial fields and a sanitized REST contract for the ChangeMoment frontend.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) { exit; }

const CM_META_FIELDS = [
    'title_fr' => 'French title', 'excerpt_fr' => 'French excerpt', 'content_fr' => 'French content',
    'title_fa' => 'Persian title', 'excerpt_fa' => 'Persian excerpt', 'content_fa' => 'Persian content',
    'category' => 'Frontend category', 'read_minutes' => 'Reading time (minutes)',
];

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
