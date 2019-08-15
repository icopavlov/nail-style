const openSectionDuration = 850,
	closeSectionDuration = 1250;

$( document ).ready( function() {
	
	$( ".button.close-section" ).each( function() {
		let currentButtonClose = $( this ), 
			currentSectionHeader = currentButtonClose.closest( ".section" ).find( ".header" );
		currentSectionHeader.find( ".button.open-section" ).wrapAll( "<div class= 'button-wrapper' />" ); 
		currentSectionHeader.find( ".button-wrapper" ).append( currentButtonClose );
	} );
	
	$( ".section" ).on( "click", function( e ) { 
		let target = $( e.target );
		
		if ( target.is( ".button.open-section" ) ) {
			
			let section = target.closest( ".section" ), 
				sectionMain = section.find( ".main" ),
				sectionHeight = section.outerHeight() + sectionMain.outerHeight();
			// toggleSection(  );
			section.get( 0 ).style.setProperty( "--section-full-height", sectionHeight + "px" );
			
		}
	} );
	
	/* let contactInfo = $( "#contact-info" );
	toggle( contactInfo, contactInfo.find( ".header" ).outerHeight() + contactInfo.find( ".main" ).outerHeight() ); */
	
	/* let quickContact = $( "#quick-contact" ), 
		quickContactEntry = quickContact.find( ".entry" ).eq( 0 );
	
	$( "body" ).get( 0 ).style.setProperty( "--quick-contact-entry-width", quickContactEntry.outerWidth() + "px" ); */
	
	
	
} );

function toggleSection( target ) {
	if ( target.is( ".button" ) ) {
		let section = target.closest( ".section" ), 
			headerHeight = section.find( ".header" ).outerHeight();
		if ( target.is( ".button.open-section" ) ) {
			let mainHeight = section.find( ".main" ).outerHeight();
			/* openTargetSection( section, headerHeight + mainHeight ); */
			/* toggle( section, headerHeight + mainHeight ); */
			/* toggle( section, mainHeight ); */
			openTargetSection( section, mainHeight );
		} else if ( target.is( ".button.close-section" ) ) {
			/* closeTargetSection( section, headerHeight ); */
			/* toggle( section, headerHeight ); */
			closeTargetSection( section, headerHeight );
		}
		
	}
	
}

/* function openTargetSection( section, openSectionHeight ) {
		
	section.animate( {
		"height": openSectionHeight
	}, openSectionDuration, function() { 
		setHeight( section, "auto" )
	} );
	
}

function setHeight( section, value ) {
	section.css( "height", value );
}

function closeTargetSection( section, closedSectionHeight ) {
	
	section.animate( {
		"height": closedSectionHeight
	}, closeSectionDuration );
	
} */

/* function toggle( section, newHeight ) {
	section.animate( {
		"height": newHeight
	}, 850 );
	
} */


/* $( document ).ready( function() {
	
	$( ".close-section" ).each( function() {
		$( this ).closest( ".main" ).find( ".feature-image" ).append( $( this ) );
	} );
	
	$( ".main .content .title" ).each( function() {
		$( this ).closest( ".main" ).find( ".feature-image" ).append( $( this ) );
	} );
	
	
} ); */

/* $( document ).ready( function() {
	
	let buttonOpenService = $( ".open-service" );
	buttonOpenService.on( "click", function() {
		
	} );
	
} ); */














