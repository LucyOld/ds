( function( blocks, components, data, editor, element, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;

	blocks.registerBlockType( 'flex-posts/list', {
		title: __( 'Flex Posts', 'flex-posts' ),

		icon: 'grid-view',

		category: 'widgets',

		attributes: {
			title: {
				type: 'string',
				default: ''
			},
			title_url: {
				type: 'string',
				default: ''
			},
			layout: {
				type: 'number',
				default: 1
			},
			post_type: {
				type: 'string',
				default: "post"
			},
			cat: {
				type: 'string',
				default: ''
			},
			tag: {
				type: 'string',
				default: ''
			},
			order_by: {
				type: 'string',
				default: 'newest'
			},
			number: {
				type: 'number',
				default: 4
			},
			skip: {
				type: 'number',
				default: 0
			},
			show_image: {
				type: 'string',
				default: 'all'
			},
			show_categories: {
				type: 'boolean',
				default: false
			},
			show_author: {
				type: 'boolean',
				default: false
			},
			show_date: {
				type: 'boolean',
				default: true
			},
			show_comments: {
				type: 'boolean',
				default: true
			},
			show_excerpt: {
				type: 'boolean',
				default: false
			},
			excerpt_length: {
				type: 'number',
				default: 15
			},
			show_readmore: {
				type: 'boolean',
				default: false
			},
			readmore_text: {
				type: 'string',
				default: ''
			},
			pagination: {
				type: 'boolean',
				default: false
			}
		},

		edit: function( props ) {
			var attr = props.attributes;
			var layouts = [];
			for ( i = 1; i <= flex_posts.layouts; i++ ) {
				layouts.push( { value: i, label: __( 'Layout', 'flex-posts' ) + ' ' + i } );
			}
			return [
				el( components.ServerSideRender, {
					block: 'flex-posts/list',
					attributes: props.attributes
				} ),
				el(
					editor.InspectorControls,
					{ key: 'inspector' },
					el(
						components.PanelBody,
						{
							title: __( 'General', 'flex-posts' ),
							initialOpen: true
						},
						el(
							components.TextControl,
							{
								type: 'text',
								label: __( 'Title', 'flex-posts' ),
								value: attr.title,
								onChange: function( val ) {
									props.setAttributes( { title: val } )
								}
							}
						),
						el(
							components.TextControl,
							{
								type: 'text',
								label: __( 'Title URL', 'flex-posts' ),
								value: attr.title_url,
								onChange: function( val ) {
									props.setAttributes( { title_url: val } )
								}
							}
						),
						el(
							components.SelectControl,
							{
								label: 'Layout',
								options: layouts,
								value: attr.layout,
								onChange: function( val ) {
									props.setAttributes( { layout: parseInt( val ) } )
								}
							}
						),
					)
				),
				el(
					editor.InspectorControls,
					{},
					el(
						components.PanelBody,
						{
							title: __( 'Filter', 'flex-posts' ),
							initialOpen: false
						},
						el(
							components.SelectControl,
							{
								label: 'Post Type',
								value: attr.post_type,
								options: flex_posts.post_types,
								onChange: function( val ) {
									props.setAttributes( { post_type: val } )
								}
							}
						),
						el(
							components.SelectControl,
							{
								label: __( 'Category', 'flex-posts' ),
								value: attr.cat,
								options: flex_posts.categories,
								onChange: function( val ) {
									props.setAttributes( { cat: val } )
								}
							}
						),
						el(
							components.TextControl,
							{
								type: 'text',
								label: __( 'Tag(s)', 'flex-posts' ),
								value: attr.tag,
								onChange: function( val ) {
									props.setAttributes( { tag: val } )
								}
							}
						),
						el(
							components.SelectControl,
							{
								label: __( 'Order by', 'flex-posts' ),
								value: attr.order_by,
								options: flex_posts.order_by,
								onChange: function( val ) {
									props.setAttributes( { order_by: val } )
								}
							}
						),
						el(
							components.RangeControl,
							{
								label: __( 'Number of posts to show', 'flex-posts' ),
								value: attr.number,
								min: 1,
								onChange: function( val ) {
									props.setAttributes( { number: val } )
								}
							}
						),
						el(
							components.RangeControl,
							{
								label: __( 'Number of posts to skip', 'flex-posts' ),
								value: attr.skip,
								min: 0,
								onChange: function( val ) {
									props.setAttributes( { skip: val } )
								}
							}
						),
					)
				),
				el(
					editor.InspectorControls,
					{},
					el(
						components.PanelBody,
						{
							title: __( 'Display', 'flex-posts' ),
							initialOpen: false
						},
						el(
							components.SelectControl,
							{
								label: __( 'Show image on', 'flex-posts' ),
								value: attr.show_image,
								options: [
									{ value: 'all', label: __( 'All posts', 'flex-posts' ) },
									{ value: 'first', label: __( 'First post only', 'flex-posts' ) },
									{ value: 'none', label: __( 'None', 'flex-posts' ) }
								],
								onChange: function( val ) {
									props.setAttributes( { show_image: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show categories', 'flex-posts' ),
								checked: attr.show_categories,
								onChange: function( val ) {
									props.setAttributes( { show_categories: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show author', 'flex-posts' ),
								checked: attr.show_author,
								onChange: function( val ) {
									props.setAttributes( { show_author: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show date', 'flex-posts' ),
								checked: attr.show_date,
								onChange: function( val ) {
									props.setAttributes( { show_date: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show comments number', 'flex-posts' ),
								checked: attr.show_comments,
								onChange: function( val ) {
									props.setAttributes( { show_comments: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show excerpt', 'flex-posts' ),
								checked: attr.show_excerpt,
								onChange: function( val ) {
									props.setAttributes( { show_excerpt: val } )
								}
							}
						),
						el(
							components.TextControl,
							{
								type: 'text',
								label: __( 'Excerpt length', 'flex-posts' ),
								value: attr.excerpt_length,
								onChange: function( val ) {
									props.setAttributes( { excerpt_length: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show read more link', 'flex-posts' ),
								checked: attr.show_readmore,
								onChange: function( val ) {
									props.setAttributes( { show_readmore: val } )
								}
							}
						),
						el(
							components.TextControl,
							{
								type: 'text',
								label: __( 'Read more text', 'flex-posts' ),
								value: attr.readmore_text,
								onChange: function( val ) {
									props.setAttributes( { readmore_text: val } )
								}
							}
						),
						el(
							components.CheckboxControl,
							{
								label: __( 'Show pagination', 'flex-posts' ),
								checked: attr.pagination,
								onChange: function( val ) {
									props.setAttributes( { pagination: val } )
								}
							}
						)
					)
				)
			];
		},

		save: function() {
			// Rendering in PHP
			return null;
		},
	} );
} )(
	window.wp.blocks,
	window.wp.components,
	window.wp.data,
	window.wp.editor,
	window.wp.element,
	window.wp.i18n
);
