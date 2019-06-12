<?php 
//change base permalinks to match react router
add_action('init','barebones_change_base_permalinks');
function barebones_change_base_permalinks() {    
    global $wp_rewrite;
    $wp_rewrite->permalink_structure = 'post/%pagename%/';
    $wp_rewrite->page_structure = 'page/%pagename%/';    
    $wp_rewrite->flush_rules();    
} 

//adds a custom route for search
//https://benrobertson.io/wordpress/wordpress-custom-search-endpoint

function barebones_register_search_route() {
   
    register_rest_route('wp/v2', '/search', [
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'barebones_ajax_search',
        'args' => barebones_get_search_args()
    ]);
}

add_action( 'rest_api_init', 'barebones_register_search_route');

function barebones_ajax_search( $request ) {
    $posts = [];
    $results = [];
    // check for a search term
 
    if( isset($request['s'])) :
        // get posts 
        $posts = get_posts([
            'posts_per_page' => 10,
            'post_type' => ['page', 'post'],
            's' => $request['s'],
        ]);
		// set up the data I want to return
        foreach($posts as $post):
            $results[] = [
                'title' => $post->post_title,
                'link' => get_permalink( $post->ID )
            ];
        endforeach;
    endif;

    if( empty($results) ) :
        return new WP_Error( 'front_end_ajax_search', 'No results');
    endif;

    return rest_ensure_response( $results );
}

function barebones_get_search_args() {

    $args = [];
    $args['s'] = [
       'description' => esc_html__( 'The search term.', 'barebones_' ),
       'type'        => 'string',
   ]; 

   return $args;
}