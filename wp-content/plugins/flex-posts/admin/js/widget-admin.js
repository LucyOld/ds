( function( $ ) {
	function fp_tab_show( widget, tab = '' ) {
		var target;
		if ( '' === tab ) {
			tab = $( '.fp-tabs > li:first-child .fp-tab-item', widget );
		}
		target = tab.data( 'target' );

		$( '.fp-tab-item', widget ).removeClass( 'active' );
		$( '.fp-tab', widget ).removeClass( 'active' );

		tab.addClass( 'active' );
		$( '.' + target, widget ).addClass( 'active' )
	}

	$( function() {
		$( '#widgets-right .widget[id*="flex-posts"]' ).each( function() {
			var widget = $( this );
			fp_tab_show( widget );
		} );

		$( '#widgets-right' ).on( 'click', '.fp-tab-item', function( e ) {
			e.preventDefault();
			var tab    = $( this );
			var widget = $( this ).closest( '.widget' );
			fp_tab_show( widget, tab );
		} );
	} );

	$( document ).on( 'widget-added widget-updated', function( event, widget ) {
		fp_tab_show( widget );
	} );

} )( jQuery );
