/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { IconButton, Spinner } = wp.components;
const { __ } = wp.i18n;
const { BACKSPACE, DELETE } = wp.keycodes;
const { withSelect } = wp.data;
const { isBlobURL } = wp.blob;

class GalleryImage extends Component {
	constructor() {
		super( ...arguments );

		this.onSelectMedia = this.onSelectMedia.bind( this );
		this.onRemoveImage = this.onRemoveImage.bind( this );
		this.bindContainer = this.bindContainer.bind( this );
	}

	bindContainer( ref ) {
		this.container = ref;
	}

	onSelectMedia() {
		if ( ! this.props.isSelected ) {
			this.props.onSelect();
		}
	}

	onRemoveImage( event ) {
		if (
			this.container === document.activeElement &&
			this.props.isSelected && [ BACKSPACE, DELETE ].indexOf( event.keyCode ) !== -1
		) {
			event.stopPropagation();
			event.preventDefault();
			this.props.onRemove();
		}
	}

	componentDidUpdate( ) {
		const { image, url } = this.props;
		if ( image && ! url ) {
			this.props.setAttributes( {
				url: image.source_url,
				alt: image.alt_text,
			} );
		}
	}

	render() {
		const { url, alt, id, type, isSelected, onRemove, 'aria-label': ariaLabel } = this.props;

		const typeRenders = {
			/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
			image: () => <img
				src={ url }
				alt={ alt }
				className={ ( id && type === 'image' ) ? `wp-image-${ id }` : null }
				data-id={ id }
				onClick={ this.onSelectMedia }
				onFocus={ this.onSelectMedia }
				onKeyDown={ this.onRemoveImage }
				tabIndex="0"
				aria-label={ ariaLabel }
				ref={ this.bindContainer }
			/>,
			video: () => <video
				autoPlay
				muted
				loop
				src={ url }
				onClick={ this.onSelectMedia }
				onFocus={ this.onSelectMedia }
				onKeyDown={ this.onRemoveImage }
				tabIndex="0"
				aria-label={ ariaLabel }
				ref={ this.bindContainer }
			/>,
			empty: () => <div
				role="checkbox"
				className="empty-preview"
				onClick={ this.onSelectMedia }
				onFocus={ this.onSelectMedia }
				onKeyDown={ this.onRemoveImage }
				tabIndex="0"
				aria-label={ ariaLabel }
				ref={ this.bindContainer }
			>
				empty
			</div>,
			/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
		};

		const className = classnames( {
			'is-selected': isSelected,
			'is-transient': isBlobURL( url ),
		} );

		return (
			<figure className={ className }>
				{ isSelected && <Fragment>
					<div className="block-library-gallery-item__inline-menu">
						<IconButton
							icon="no-alt"
							onClick={ onRemove }
							className="blocks-gallery-item__remove"
							label={ __( 'Remove Slide' ) }
						/>
					</div>
				</Fragment> }
				{ ( typeRenders[ type ] || typeRenders.empty )() }
				{ isBlobURL( url ) && <Spinner /> }
			</figure>
		);
	}
}

export default withSelect( ( select, ownProps ) => {
	const { getMedia } = select( 'core' );
	const { id } = ownProps;

	return {
		image: id ? getMedia( id ) : null,
	};
} )( GalleryImage );
