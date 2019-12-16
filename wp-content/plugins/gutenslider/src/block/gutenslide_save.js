import classnames from 'classnames';
import { noop } from 'lodash';

const {
	InnerBlocks,
} = wp.editor;

const { Fragment } = wp.element;

export default function( { attributes } ) {
	const {
		mediaType,
		mediaUrl,
		mediaAlt,
		mediaId,
		rgbaBackground,
		linkUrl,
		verticalAlign,
	} = attributes;

	const mediaTypeRenders = {
		image: () => <img src={ mediaUrl } alt={ mediaAlt } className={ ( mediaId && mediaType === 'image' ) ? `wp-image-${ mediaId }` : null } />,
		video: () => <video autoPlay muted loop src={ mediaUrl } />,
	};

	const linkTo = typeof linkUrl !== 'undefined' && linkUrl && linkUrl !== '' ?
		encodeURI( linkUrl ) : false;

	const linkifyButton = ( jsxElements ) => {
		return (
			<Fragment>
				{ linkTo &&
					<a className="slide-link" href={ linkTo } > { jsxElements }</a>
				}
			</Fragment>
		);
	};

	const overlayStyle = {
		background: rgbaBackground,
	};

	const classes = classnames(
		'wp-block-eedee-block-gutenslide', {
			[ `vertical-align-${ verticalAlign }` ]: verticalAlign,
		}
	);

	return (
		<div className={ classes }>
			<div>
				<div className="slide-bg">
					{ ( mediaTypeRenders[ mediaType ] || noop )() }
				</div>
				<div className="slide-overlay" style={ overlayStyle } />
				<div className="slide-content">
					<InnerBlocks.Content />
				</div>
				{ linkifyButton( ) }
			</div>
		</div>
	);
}
