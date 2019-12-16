<header class="header">
  <div class="header-container">
    <div class="header-container__search">
    <?php get_search_form(); ?>
    <img src="wp-content/themes/dsemotion/assets/images/search-icon.jpeg">
    </div>

    <div class="header-container__logo">
    <a class="brand" href="<?= esc_url(home_url('/')); ?>"><img src="wp-content/themes/dsemotion/assets/images/logo.jpeg"></a>
    </div>

    <div class="header-container__icons">
      <div class="header-container__icons--single">Wishlist<img src="wp-content/themes/dsemotion/assets/images/heart-icon.jpeg"></div>
      <div class="header-container__icons--single">Cart<img src="wp-content/themes/dsemotion/assets/images/cart-icon.jpeg"></div>
      <div class="header-container__icons--single">Login<img src="wp-content/themes/dsemotion/assets/images/login-icon.jpeg"></div>
    </div>
  </div>

  <nav class="header-container__main-nav">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
      endif;
      ?>
  </nav>

</header>
