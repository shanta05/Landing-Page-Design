(function ($) {
	"use strict";

    jQuery(document).ready(function($){


			

		  $('.portfolio-list-27').masonry({

    			fitWidth: true
            });
		  $(".single-portfolio-item-27").hover(function(){
		  	$(".single-portfolio-item-27, .portfolio-hover-27 h2, .portfolio-hover-27 p").removeClass("animated slideInUp");
		  	$(this).find(".portfolio-hover-27 h2, .portfolio-hover-27 p").addClass("animated slideInUp");
		  });

		  $(".menu-triger-27").on('click',function(){

		  	$(".off-canvus-menu").addClass("right-zero");
		  	$(".off-canvus-menu-overlay").addClass("overlay-visible");

		  });

		  $(".menu-close,.off-canvus-menu-overlay").on('click',function(){

		  	$(".off-canvus-menu").removeClass("right-zero");
		  	$(".off-canvus-menu-overlay").removeClass("overlay-visible");

		  });


		  $(".header-area").headroom();


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));
