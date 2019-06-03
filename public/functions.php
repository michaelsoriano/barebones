<?php 
//change base permalinks to match react router
add_action('init','change_base_permalinks');
function change_base_permalinks() {    
    global $wp_rewrite;
    $wp_rewrite->permalink_structure = 'post/%pagename%/';
    $wp_rewrite->page_structure = 'page/%pagename%/';    
    $wp_rewrite->flush_rules();    
} 