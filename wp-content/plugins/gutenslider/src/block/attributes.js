const { __ } = wp.i18n;

export const slideAttributes = {
	isEditable: {
		type: 'boolean',
		default: true,
	},
	mediaUrl: {
		type: 'string',
		source: 'attribute',
		selector: '.slide-bg img, .slide-bg video',
		attribute: 'src',
	},
	mediaAlt: {
		type: 'string',
		source: 'attribute',
		selector: '.slide-bg img',
		attribute: 'alt',
		default: '',
	},
	mediaType: {
		type: 'string',
	},
	mediaId: {
		type: 'number',
	},
	overlayColor: {
		type: 'string',
	},
	dimRatio: {
		type: 'number',
		default: 0.5,
	},
	rgbaBackground: {
		type: 'string',
		default: '',
	},
	initialized: {
		type: 'boolean',
		default: false,
	},
	linkUrl: {
		type: 'string',
		default: '',
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
};

export const blockAttributes = {
	media: {
		type: 'array',
		default: [],
	},
	align: {
		type: 'string',
		default: 'none',
	},
	bgImageId: {
		type: 'number',
	},
	contentMode: {
		type: 'string',
		default: 'change',
	},
	fadeMode: {
		type: 'boolean',
		default: true,
	},
	slidesToShow: {
		type: 'number',
		default: 1,
	},
	slidesToScroll: {
		type: 'number',
		default: 1,
	},
	sliderHeight: {
		type: 'string',
		default: '50vh',
	},
	isFullScreen: {
		type: 'boolean',
		default: false,
	},
	pauseOnFocus: {
		type: 'boolean',
		default: true,
	},
	pauseOnHover: {
		type: 'boolean',
		default: true,
	},
	pauseOnDotsHover: {
		type: 'boolean',
		default: true,
	},
	enableSpacing: {
		type: 'boolean',
		default: true,
	},
	spacingX: {
		type: 'number',
		default: 40,
	},
	spacingY: {
		type: 'number',
		default: 40,
	},
	spacingXMobile: {
		type: 'number',
		default: 40,
	},
	spacingYMobile: {
		type: 'number',
		default: 40,
	},
	spacingXTablet: {
		type: 'number',
		default: 40,
	},
	spacingYTablet: {
		type: 'number',
		default: 40,
	},
	spacingXDesktop: {
		type: 'number',
		default: 40,
	},
	spacingYDesktop: {
		type: 'number',
		default: 40,
	},
	spacingYUnit: {
		type: 'string',
		default: 'px',
	},
	spacingXUnit: {
		type: 'string',
		default: 'px',
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	duration: {
		type: 'number',
		default: 3,
	},
	fadeSpeed: {
		type: 'number',
		default: 1,
	},
	arrows: {
		type: 'boolean',
		default: true,
	},
	arrowSize: {
		type: 'number',
		default: 20,
	},
	arrowColor: {
		type: 'string',
		default: '#ffffff',
	},
	arrowStyle: {
		type: 'string',
		default: 'arrow-style-1',
	},
	dots: {
		type: 'boolean',
		default: true,
	},
	dotSize: {
		type: 'number',
		default: 25,
	},
	dotColor: {
		type: 'string',
		default: '#ffffff',
	},
	dotStyle: {
		type: 'string',
		default: 'dot-style-1',
	},
	hasParallax: {
		type: 'boolean',
		default: false,
	},
	parallaxDirection: {
		type: 'string',
		default: 'bottom',
	},
	parallaxAmount: {
		type: 'number',
		default: 1.3,
	},
	overlayColor: {
		type: 'string',
	},
	dimRatio: {
		type: 'number',
		default: 0.5,
	},
	rgbaBackground: {
		type: 'string',
		default: '',
	},
	textColor: {
		type: 'string',
	},
	mixBlendMode: {
		type: 'string',
		default: 'mb-none',
	},
	contentOpacity: {
		type: 'number',
		default: 1,
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
};

export const MAX_SLIDES = 20;

export const PARALLAX_DIRECTIONS = [
	{ value: 'bottom', label: __( '↑ bottom to top' ) },
	{ value: 'top', label: __( '↓ top to bottom' ) },
	{ value: 'left', label: __( '→ left to right' ) },
	{ value: 'right', label: __( '← right to left' ) },
];

export const ARROW_STYLES = [
	{ value: 'arrow-style-1', label: __( 'Style 1' ) },
	{ value: 'arrow-style-2', label: __( 'Style 2' ) },
	{ value: 'arrow-style-3', label: __( 'Style 3' ) },
];

export const DOT_STYLES = [
	{ value: 'dot-style-1', label: __( 'Style 1' ) },
	{ value: 'dot-style-2', label: __( 'Style 2' ) },
	{ value: 'dot-style-3', label: __( 'Style 3' ) },
	{ value: 'dot-style-4', label: __( 'Style 4' ) },
];
