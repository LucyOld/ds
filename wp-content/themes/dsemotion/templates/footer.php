<footer class="footer">
<div class="footer-container">
<nav class="footer-container__main-nav">
        <?php
        if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
        endif;
        ?>
</nav>
    <nav class="footer-container__secondary-nav">
        <?php
        if (has_nav_menu('footer_navigation')) :
            wp_nav_menu(['theme_location' => 'footer_navigation', 'menu_class' => 'nav']);
        endif;
        ?>
    </nav>
    <div class="footer-container__logo">
        <img src="wp-content/themes/dsemotion/assets/images/logo-image.jpeg">
    </div>
</footer>
