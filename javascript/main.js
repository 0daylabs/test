jQuery(document).ready(function($) {
  "use strict";
	$(".topbar-btn").click(function(){
		$(".topbar").slideToggle("slow");
		$(this).toggleClass("active");
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('.skills-wrap').appear(function() {
		function progress(percent, $element) {
		var progressBarWidth = percent * $element.width() / 100;
		$element.find('div').animate({ width: progressBarWidth }, 800);
	}
	progress(86, $('#progressBar'));
	progress(70, $('#progressBar1'));
	progress(75, $('#progressBar2'));
	progress(55, $('#progressBar3'));
	},{accX: 0, accY: -200});
});

jQuery(document).ready(function($) {
  "use strict";
	$('.about-info3').appear(function() {
	$('#lines').animateNumber({ number: 859 }, 1000 );
	$('#lines1').animateNumber({ number: 599 }, 1000 );
	$('#lines2').animateNumber({ number: 25770 }, 1000 );
	$('#lines3').animateNumber({ number: 1952 }, 1000 );
	},{accX: 0, accY: -50});
});

$(window).scroll( function() {
  "use strict";
    var value = $(this).scrollTop();
    if ( value > 180 )
        $("#hidden-header").css("top", "0px");
    else
        $("#hidden-header").css("top", "-200px");
});

jQuery(document).ready(function($) {
  "use strict";
	$(".side-pposts ul").mCustomScrollbar({
		theme:"dark",
		advanced:{
	      updateOnContentResize:true
	    }
	});

      $(".side-rposts ul").mCustomScrollbar({
		theme:"dark",
		advanced:{
	      updateOnContentResize:true
          }
	});

	$(".side-comments ul").mCustomScrollbar({
		theme:"dark",
		advanced:{
		updateOnContentResize:true
	    }
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('.navbar-nav li').hover(function () {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
		}, function() {
		$(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp()
	});
});

jQuery(document).ready(function($) {
  "use strict";
    $(".tabContent").not(":first").hide();
    $("ul.tabs li:first").addClass("active").show(); 
 
    $("ul.tabs li").click(function() {
        $("ul.tabs li.active").removeClass("active");
        $(this).addClass("active");
        $(".tabContent").hide();       
        $($('a',this).attr("href")).fadeIn('slow');
        return false;
    });
});

jQuery(document).ready(function($) {
  "use strict";
	$('.main-header-menu').mobileMenu({
		defaultText: 'Navigation',
		className: 'select-menu',
		subMenuDash: '&ndash;'
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('#main-slider').flexslider({
		animation: "slide",
		slideshowSpeed: 4500, 
		start: function(slider){
		$('body').removeClass('loading');
		}
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('.project-inner').enscroll({
	    horizontalScrolling: true,
	    horizontalTrackClass: 'horizontal-track2',
	    horizontalHandleClass: 'horizontal-handle2',
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('#quote-slider').flexslider({
		animation: "fade",
		slideshowSpeed: 4500, 
		directionNav: true             
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio-slider').flexslider({
		animation: "slide",
		slideshowSpeed: 4500, 
		directionNav: true             
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio-slider1').flexslider({
		animation: "fade",
		slideshowSpeed: 4500, 
        controlNav: "thumbnails",
	manualControls: ".flex-control-nav1 li",             
		slideshow: false,
		directionNav: false             
	});
});

	$(window).load(function() {
	  "use strict";
	var $container = $('#folio');
	$container.isotope({
		itemSelector : '.folio-item'
	});
	var $optionSets = $('#portfolio .folio-filter'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.folio-filter');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		changeLayoutMode( $this, options );
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}    
	return false;
	});
});


jQuery(document).ready(function($) {
  "use strict";
      $("#latestposts").owlCarousel({
		navigation : true
	});

      $("#feature-posts").owlCarousel({
		navigation : true
	});

      $("#prelatedposts").owlCarousel({
		pagination : true,
		navigation : false
	});

});


jQuery(document).ready(function($) {
  "use strict";
	$('.slider3').bxSlider({
		slideWidth: 228,
		minSlides: 1,
		maxSlides: 5,
		slideMargin: 0,
		pager: false,
		moveSlides: 1
	});
});

jQuery(document).ready(function($) {
  "use strict";
	$('#slider1-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});



	$('#slider2-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});


	$('#slider3-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});



	$('#slider4-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});



	$('#slider5-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});



	$('#slider6-inner').bxSlider({
		pagerCustom: '#bx-pager'
	});

});

jQuery(document).ready(function($) {
  "use strict";
	$('audio,video').mediaelementplayer();
});

jQuery(document).ready(function($) {
  "use strict";
			$('.toggle1').each(function(){
				$(this).find('.toggle-content1').show();
			});
			$('.toggle1 a.toggle-trigger1').click(function(){
				var el = $(this), parent = el.closest('.toggle1');
				if( el.hasClass('active') )
				{
					parent.find('.toggle-content1').slideToggle();
					el.removeClass('active');
				}
				else
				{
					parent.find('.toggle-content1').slideToggle();
					el.addClass('active');
				}
				return false;
			});
		});

jQuery(document).ready(function($) {
  "use strict";
			$('.toggle').each(function(){
				$(this).find('.toggle-content').hide();
			});
 
			$('.toggle a.toggle-trigger').click(function(){
				var el = $(this), parent = el.closest('.toggle');
				if( el.hasClass('active') )
			{
				parent.find('.toggle-content').slideToggle();
				el.removeClass('active');
			}
			else
			{
				parent.find('.toggle-content').slideToggle();
				el.addClass('active');
			}
			return false;
			});
		});


jQuery(document).ready(function($) {
  "use strict";

// slider
$("#sliderRange")
.slider({
    range: true,
    min: 0,
    max: 500,
    step: 1,
    values: [75, 300],
    slide: function(event, ui) {
        var price1 = ui.values[0];
        var price2 = ui.values[1];
        $("#price1")
        .val("\u20ac" + price1);
        $("#price2")
        .val("\u20ac" + price2);
    }
});
$('#price1')
.bind('keyup', function() {
    var from = $(this)
    .val();
    var to = $('#price2')
    .val();
    $('#sliderRange')
    .slider('option', 'values', [from, to]);
});
$('#price2')
.bind('keyup', function() {
    var from = $('#price1')
    .val();
    var to = $(this)
    .val();
    $('#sliderRange')
    .slider('option', 'values', [from, to]);
});

});


    $(window).load(function(){
      $('#thumb-slider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });


/*
	VIEWPORT BUG FIX
	iOS viewport scaling bug fix, by @mathias, @cheeaun and @jdalton
*/

(function(doc){var addEvent='addEventListener',type='gesturestart',qsa='querySelectorAll',scales=[1,1],meta=qsa in doc?doc[qsa]('meta[name=viewport]'):[];function fix(){meta.content='width=device-width,minimum-scale='+scales[0]+',maximum-scale='+scales[1];doc.removeEventListener(type,fix,true);}if((meta=meta[meta.length-1])&&addEvent in doc){fix();scales=[.25,1.6];doc[addEvent](type,fix,true);}}(document));

jQuery("div.quantity").append('<input type="button" value="+" id="add1" class="plus" />').prepend('<input type="button" value="-" id="minus1" class="minus" />');
	    jQuery(".plus").click(function()
	    {
	        var currentVal = parseInt(jQuery(this).prev(".qty").val());
	       
	        if (!currentVal || currentVal=="" || currentVal == "NaN") currentVal = 0;
	        
	        jQuery(this).prev(".qty").val(currentVal + 1); 
	    });
	
	    jQuery(".minus").click(function()
	    {
	        var currentVal = parseInt(jQuery(this).next(".qty").val());
	        if (currentVal == "NaN") currentVal = 0;
	        if (currentVal > 0)
	        {
	            jQuery(this).next(".qty").val(currentVal - 1);
	        }
	    });


	