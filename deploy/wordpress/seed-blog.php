<?php
if (!defined('ABSPATH')) { exit(1); }

$seed_file = '/tmp/changemoment-legacy-blog-seed.json';
if (!file_exists($seed_file)) { fwrite(STDERR, "Seed file not found\n"); exit(1); }
$posts = json_decode(file_get_contents($seed_file), true, 512, JSON_THROW_ON_ERROR);

foreach ($posts as $source) {
    $existing = get_page_by_path($source['slug'], OBJECT, 'post');
    $post_id = wp_insert_post([
        'ID' => $existing ? $existing->ID : 0,
        'post_type' => 'post',
        'post_status' => 'publish',
        'post_name' => $source['slug'],
        'post_title' => $source['title']['en'],
        'post_excerpt' => $source['excerpt']['en'],
        'post_content' => wp_kses_post($source['contentHtml']['en']),
        'post_date' => $source['date'] . ' 12:00:00',
    ], true);
    if (is_wp_error($post_id)) { fwrite(STDERR, $post_id->get_error_message() . "\n"); exit(1); }

    $meta = [
        'title_fr' => $source['title']['fr'], 'excerpt_fr' => $source['excerpt']['fr'],
        'content_fr' => wp_kses_post($source['contentHtml']['fr']),
        'title_fa' => $source['title']['fa'], 'excerpt_fa' => $source['excerpt']['fa'],
        'content_fa' => wp_kses_post($source['contentHtml']['fa']),
        'category' => $source['category'], 'read_minutes' => $source['readMinutes'],
    ];
    foreach ($meta as $key => $value) update_post_meta($post_id, '_cm_' . $key, $value);
    wp_set_post_tags($post_id, $source['tags'], false);

    // Rank Math remains the canonical editorial source for SEO metadata.
    update_post_meta($post_id, 'rank_math_title', $source['title']['en'] . ' · ChangeMoment');
    update_post_meta($post_id, 'rank_math_description', $source['excerpt']['en']);
    update_post_meta($post_id, 'rank_math_focus_keyword', implode(', ', array_slice($source['tags'], 0, 5)));
}

echo 'Seeded ' . count($posts) . " multilingual posts.\n";
