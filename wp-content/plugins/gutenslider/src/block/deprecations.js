const {
	InnerBlocks,
} = wp.editor;

export default [
	{
		attributes: {
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
				type: 'number',
				default: 50,
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
		},
		isEligible( { sliderHeight } ) {
			return typeof sliderHeight === 'number';
		},
		migrate( attributes ) {
			const { sliderHeight } = attributes;
			return Object.assign( attributes, { sliderHeight: `${ sliderHeight }vh` } );
		},
		save( ) {
			return <InnerBlocks.Content />;
		},
	},
];
