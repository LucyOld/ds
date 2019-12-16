<?php
/**
 * Functions used in template files
 *
 * @package Flex Posts
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'flex_posts_meta' ) ) {
	/**
	 * Display meta information.
	 *
	 * @param array $instance Widget settings.
	 */
	function flex_posts_meta( $instance ) {
		do_action( 'flex_posts_meta_start' );

		if ( ! empty( $instance['show_author'] ) ) {
			flex_posts_author_meta();
		}
		if ( ! empty( $instance['show_date'] ) ) {
			flex_posts_date_meta();
		}
		if ( ! empty( $instance['show_comments'] ) ) {
			flex_posts_comments_meta();
		}

		do_action( 'flex_posts_meta_end' );
	}
}

if ( ! function_exists( 'flex_posts_author_meta' ) ) {
	/**
	 * Display author meta.
	 */
	function flex_posts_author_meta() {
		?>
		<span class="fp-author">
			<span class="author vcard">
				<a class="url fn n" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
					<?php the_author(); ?>
				</a>
			</span>
		</span>
		<?php
	}
}

if ( ! function_exists( 'flex_posts_date_meta' ) ) {
	/**
	 * Display date meta.
	 */
	function flex_posts_date_meta() {
		?>
		<span class="fp-date">
			<a href="<?php the_permalink(); ?>" rel="bookmark">
				<time class="entry-date published" datetime="<?php the_date( 'c' ); ?>">
					<?php echo esc_html( get_the_date() ); ?>
				</time>
			</a>
		</span>
		<?php
	}
}

if ( ! function_exists( 'flex_posts_comments_meta' ) ) {
	/**
	 * Display comments meta.
	 */
	function flex_posts_comments_meta() {
		?>
		<span class="fp-comments">
			<?php comments_popup_link(); ?>
		</span>
		<?php
	}
}

if ( ! function_exists( 'flex_posts_categories_meta' ) ) {
	/**
	 * Display categories meta.
	 */
	function flex_posts_categories_meta() {
		?>
		<span class="fp-categories">
			<?php the_category( ', ' ); ?>
		</span>
		<?php
	}
}

if ( ! function_exists( 'flex_posts_thumbnail' ) ) {
	/**
	 * Display categories meta.
	 *
	 * @param string $size         Image size.
	 * @param array  $instance     Widget settings.
	 * @param int    $current_post Post index number.
	 */
	function flex_posts_thumbnail( $size, $instance = array(), $current_post = 0 ) {
		if ( 'none' === $instance['show_image'] ) {
			return;
		}
		if ( 'first' === $instance['show_image'] && $current_post > 0 ) {
			return;
		}
		$default_image = apply_filters( 'flex_posts_default_image', FLEX_POSTS_URL . '/public/images/default.png' );
		?>
		<div class="fp-media">
			<a class="fp-thumbnail" href="<?php the_permalink(); ?>">
				<?php if ( has_post_thumbnail() ) : ?>
					<?php the_post_thumbnail( $size ); ?>
				<?php else : ?>
					<img src="<?php echo esc_url( $default_image ); ?>" class="size-<?php echo esc_attr( $size ); ?>" alt="">
				<?php endif; ?>
			</a>
			<?php do_action( 'flex_posts_media', $instance ); ?>
		</div>
		<?php
	}
}

if ( ! function_exists( 'flex_posts_excerpt' ) ) {
	/**
	 * Display excerpt.
	 *
	 * @param int $length Number of words.
	 */
	function flex_posts_excerpt( $length = 15 ) {
		$post = get_post( get_the_ID() );
		$text = apply_filters( 'the_excerpt', $post->post_excerpt );
		if ( empty( $text ) ) {
			$text = apply_filters( 'the_excerpt', $post->post_content );
		}
		$text = wp_trim_words( $text, $length );
		echo esc_html( $text );
	}
}
