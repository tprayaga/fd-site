
/*========Initializing Jquery pluigins and other custom scripts========*/
( function( $ ) {
	"use strict";

	/*===================================
	Init Background Slideshow
	===================================*/
	//list of all transitions, I am using array for multiple transition but you can use only one without any array, you can also use "random" to have random animation
	var transArr = ["fade", "fade2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"];

	$( ".slideshow-bg" ).vegas( {
		preload: false, //Preload both images and videos at start.
		timer: true, //display or hide timer bar. The timer class is .vegas-timer-progress .
		cover: true, //the slide image is scaled to fit the container.
		delay: 4000, //delay beetween slides ( in ms ).
		firstTransition: "slideLeft", //transition for the first played slide.
		transition: transArr, //transition array or single transition.
    	firstTransitionDuration: 800, //transition duration for the first played slide ( in ms ). 
		transitionDuration: 1000, //transition duration ( in ms ).
		animation: "kenburns", //animation of the slides ( "kenburns", "kenburnsUp", "kenburnsDown", "kenburnsLeft", "kenburnsRight", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDownLeft", "kenburnsDownRight", "random" )
	    slides: [ //Array of slides.
	        { src: "assets/img/BG/wind1.jpeg" },
	        { src: "assets/img/BG/solar1.jpeg" },
	        { src: "assets/img/BG/agri2.jpeg" },
	        { src: "assets/img/BG/bg-home.jpg" },
	    ],

	    //you can use overlay in slide show to make the header text much more visible, simply uncomment the line below.
	    //If you wish to use slideshow overlay then remove the default ".overlay" div from the html.
	    //overlay: "assets/img/overlays/02.png"
	} );	



	$( ".img-slide" ).vegas( {
		preload: false, //Preload both images and videos at start.
		timer: true, //display or hide timer bar. The timer class is .vegas-timer-progress .
		cover: true, //the slide image is scaled to fit the container.
		delay: 4000, //delay beetween slides ( in ms ).
		firstTransition: "slideLeft", //transition for the first played slide.
		transition: "slideLeft", //transition array or single transition.
    	firstTransitionDuration: 800, //transition duration for the first played slide ( in ms ). 
		transitionDuration: 1000, //transition duration ( in ms ).
		//animation: "kenburns", //animation of the slides ( "kenburns", "kenburnsUp", "kenburnsDown", "kenburnsLeft", "kenburnsRight", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDownLeft", "kenburnsDownRight", "random" )
	    slides: [ //Array of slides.
	        { src: "assets/img/BG/wind1.jpeg" },
	        { src: "assets/img/BG/solar1.jpeg" },
	        { src: "assets/img/BG/agri2.jpeg" },
	        { src: "assets/img/BG/bg-home.jpg" },
	    ],

	    //you can use overlay in slide show to make the header text much more visible, simply uncomment the line below.
	    //If you wish to use slideshow overlay then remove the default ".overlay" div from the html.
	    //overlay: "assets/img/overlays/02.png"
	} );	


}( jQuery ) );
