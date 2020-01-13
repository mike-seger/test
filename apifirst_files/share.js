var header     = document.getElementById( 'header_wrap' ),
	content    = document.getElementById( 'content' ),
	shareFloat = document.getElementById( 'md_share' ),
	share      = shareFloat.getElementsByClassName( 'md-share' )[0],
	pos        = 0,
	ticking    = false;

window.addEventListener( 'scroll', function( e ) {
	pos = window.scrollY;

	if ( ! ticking ) {
		window.requestAnimationFrame( function() {
			if ( pos > header.clientHeight )
				apollo.addClass( shareFloat, 'is-sticky' );
			else
				apollo.removeClass( shareFloat, 'is-sticky' );

			if ( pos > ( ( header.clientHeight + content.clientHeight ) - 300 ) ) {
				apollo.removeClass( shareFloat, 'is-sticky' );
				apollo.addClass( shareFloat, 'is-stuck' );
			}
			else {
				apollo.removeClass( shareFloat, 'is-stuck' );
				if ( pos > header.clientHeight )
					apollo.addClass( shareFloat, 'is-sticky' );
			}

			ticking = false;
		});
	}

	ticking = true;
});