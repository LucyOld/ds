<?php
/**
 * Create a Getting Started page that fires after plugin activation
 *
 * @package Gutenslider
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Gutenslider_Getting_Started_Page Class
 */
class Gutenslider_Admin_Start_Page {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'activated_plugin', array( $this, 'redirect' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_style' ), 100 );
	}

	/**
	 * Setup the admin menu.
	 */
	public function admin_menu() {

		/**
		 * Allow users to nest the Gutenslider menu page
		 *
		 * @var string
		 */
		$submenu_parent_slug = (string) apply_filters( 'gutenslider_getting_started_submenu_parent_slug', '' );

		// if ( '' !== $submenu_parent_slug ) {
		//
		// 	add_menu_page(
		// 		$submenu_parent_slug,
		// 		__( 'Gutenslider', 'gutenslider' ),
		// 		__( 'Gutenslider', 'gutenslider' ),
		// 		apply_filters( 'gutenslider_getting_started_screen_capability', 'manage_options' ),
		// 		'gutenslider-getting-started',
		// 		array( $this, 'content' )
		// 	);
		//
		// 	return;
		//
		// }

		add_menu_page(
			__( 'Gutenslider', 'gutenslider' ),
			__( 'Gutenslider', 'gutenslider' ),
			'manage_options',
			'settings_page_gutenslider',
			[ $this, 'render' ]
		);
	}

	/**
	 * Render the view using MVC pattern.
	 */
	public function render() {
		$heading = GUTENSLIDER_PLUGIN_NAME;

		// View.
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/view.php';
	}

	/**
	 * Load Scripts
	 *
	 * Enqueues the required scripts.
	 *
	 * @return void
	 */
	public function load_style() {

		global $wp_query;

		$screen    = get_current_screen();
		$screen_id = $screen ? $screen->id : '';

		// Only enqueue admin scripts and styles on relevant pages.
		if ( false !== strpos( $screen_id, 'settings_page_gutenslider' ) ) {

			// Define where the assets are loaded from.
			$dir = Gutenslider()->asset_source( 'dist' );

			wp_enqueue_style(
				'gutenslider-getting-started',
				$dir . '/gutenslider-admin.build.css',
				GUTENSLIDER_VERSION,
				true
			);

			wp_enqueue_script(
				'gutenslider-admin-js',
				$dir . '/gutenslider-admin.build.js',
				array(),
				GUTENSLIDER_VERSION,
				true
			);
		}

	}

	/**
	 * Redirect to the Getting Started page upon plugin activation.
	 *
	 * @param string $plugin The activate plugin name.
	 */
	public function redirect( $plugin ) {

		if ( 'gutenslider/class-gutenslider.php' !== $plugin ) {

			return;

		}

		$nonce          = filter_input( INPUT_GET, '_wpnonce', FILTER_SANITIZE_STRING );
		$activate_multi = filter_input( INPUT_GET, 'activate-multi', FILTER_VALIDATE_BOOLEAN );

		if ( ! $nonce ) {

			return;

		}

		if ( defined( 'WP_CLI' ) && WP_CLI ) {

			WP_CLI::log(
				WP_CLI::colorize(
					'%b' . sprintf( '🎉 %s %s', __( 'Get started with Gutenslider here:', 'gutenslider' ), admin_url( 'admin.php?page=gutenslider-getting-started' ) ) . '%n'
				)
			);

			return;

		}

		if ( $activate_multi ) {

			return;

		}

		wp_safe_redirect( admin_url( 'admin.php?page=gutenslider-getting-started' ) );

		die();

	}
}

return new Gutenslider_Admin_Start_Page();
