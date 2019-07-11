//Flex it
$(window).load(function() {
  $('.class-name').flexslider({
    animation: "slide",
    controlNav: false, 
    animationLoop: false,
    slideshowSpeed: 3000,
    animationSpeed: 500,
    prevText: "",
    nextText: "",	
    start: function(slider) {
    	$('.client-slider .loader').css("display","none");
	},
    after: function(slider) {
    	/* auto-restart player if paused after action */
    	if (!slider.playing) {
      		slider.play();
    	}
  	}    
  });
});


//Scroll to
$(document).ready(function() {
    var newHeight = $("html").height();
    $(".button-class").click(function(event){
        $('html, body').animate({scrollTop: newHeight}, {duration: 1000, easing: 'easeOutQuint'});
    });
});

//Full browser height
$(document).ready(sizeContent);
function sizeContent() {
    var newHeight = $("html").height();
    $(".fullHeight").css("min-height", newHeight - allTotal );
    $(".fullHeight-force").css("height", newHeight - allTotal );
}

$(window).resize(function () { 
    var newHeight = $("html").height();
    $(".fullHeight").css("min-height", newHeight - allTotal);
    $(".fullHeight-orce").css("height", newHeight - allTotal);
});	




//Actions
$(document).ready(function(){
//Animate in
	$('footer, header').addClass('fadeIn');	
	setTimeout(function(){
		$('main').addClass('fadeIn')
		$('.menu-btn').addClass('active');
	}, 500);

	//Blur
	//Home
	$('.link-container').on('click','.content__link', function(){
		$('.modal-window.global').addClass('active');
		$('.home-img').addClass('blurOut');
		setTimeout(function(){$('.content-block').addClass('active')}, 500);
		setTimeout(function(){$('.content-block').removeClass('hide')}, 500);			
	});
	$('.content-block').on('click','.content-block__close-btn', function(){
		$('.content-block').addClass('hide');
		$('.content-block').removeClass('active');
		$('.home-img, iframe, .video__content__wrapper__video-control').removeClass('blurOut');
		$('.modal-window').removeClass('active');
	});
	//Video
	$('.video__content').on('click','a.video-control', function(){
		$('iframe, .video__content__wrapper__video-control').addClass('blurOut');
		$('.modal-window.video').addClass('active');
		setTimeout(function(){$('.modal-window.video .content-block').addClass('active')}, 500);
		setTimeout(function(){$('.modal-window.video .content-block').removeClass('hide')}, 500);	
	});
	$('.menu-btn').click(function(){
		$('.global-wrapper').addClass('blurOut');
		$('nav.device').addClass('active');
	});
	$('nav.device .close-btn').click(function(){
		$('.global-wrapper').removeClass('blurOut'); 
		$('nav.device').removeClass('active');
	});


});

//Page switch delay
$(document).ready(function(){
    $("header a, nav.device ul li a").click(function(e) {
	    e.preventDefault();
	    setTimeout(function(){
			$('nav.device, .menu-btn').removeClass('active');
		    $('main, footer, header').removeClass('fadeIn')
		}, 0);
    var href = $(this).attr('href');
		setTimeout(function() {window.location = href}, 1200);
		return false;
	});                            
});

//Parallax
$(document).ready(function(){
	$(window).bind('scroll',function(e){
   		parallaxScroll();
   	});
 
   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
		$('.large-window').css('background-position','center -'+((scrolledY*0.3))+'px');   	

	}
 
});

//Glitch
$(function(){
	$( ".glitch-layer" ).mgGlitch({
		destroy : true, // set 'true' to stop the plugin
        glitch: true, // set 'false' to stop glitching
        scale: true, // set 'false' to stop scaling
        blend : true, // set 'false' to stop glitch blending
        blendModeType : 'hue', // select blend mode type
        glitch1TimeMin : 600, // set min time for glitch 1 elem
        glitch1TimeMax : 900, // set max time for glitch 1 elem
        glitch2TimeMin : 10, // set min time for glitch 2 elem
        glitch2TimeMax : 115, // set max time for glitch 2 elem
	});
});

//On Mouse Move
$(document).ready(function() {

    var newWidth = $(window).width();

	if (newWidth >= 968) {
		
		var movementStrength = 25;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("body").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			var newvalue2X = width * pageX * 2 - 25 ;
			var newvalue2Y = height * pageY * -1 - 10;
			$('.brand').css("background-position", newvalueX+"px     "+newvalueY+"px");
			//$('.glitch-layer').css("background-position", newvalue2X+"px     "+newvalue2Y+"px");
		});
	} else {
		var movementStrength = 0;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("body").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			var newvalue2X = width * pageX * 2 - 25 ;
			var newvalue2Y = height * pageY * -1 - 10;
			$('.brand').css("background-position","center");
			//$('.glitch-layer').css("background-position", "center");		
		})
		
		
	}
});

$(window).resize(function () { 
	
    var newWidth = $(window).width();
	if (newWidth >= 968) {

		var movementStrength = 25;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("body").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			var newvalue2X = width * pageX * 2 - 25 ;
			var newvalue2Y = height * pageY * -1 - 10;
			$('.brand').css("background-position", newvalueX+"px     "+newvalueY+"px");
			//$('.glitch-layer').css("background-position", newvalue2X+"px     "+newvalue2Y+"px");
		});
	} else { 
		var movementStrength = 0;
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("body").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			var newvalue2X = width * pageX * 2 - 25 ;
			var newvalue2Y = height * pageY * -1 - 10;
			$('.brand').css("background-position","center");
			//$('.glitch-layer').css("background-position", "center");		
		})
	}
	if (newWidth >= 769) {
		$('body').removeClass('blurOut');
	}	
});
