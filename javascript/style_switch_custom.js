$(document).ready(function(){
		$(".corner").click(function(){
		    $(this).toggleClass("expanded");
			  $("#options").toggle( "slide" );
		})

	});

     $(function(){

        $('#font').fontselect().change(function(){
        
          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');
          
          // split font into family and weight
          font = font.split(':');
          
          // set family on paragraphs 
          $('.nav-main').css('font-family', font[0]);
          $('.menu-style-1 li a').css('font-family', font[0]);
          $('.shop-menu-title').css('font-family', font[0]);
          $('.slider-info h3').css('font-family', font[0]);
          $('.button_style1').css('font-family', font[0]);
          $('.button_style3').css('font-family', font[0]);
          $('.lmore_style1').css('font-family', font[0]);
          $('.button_style2').css('font-family', font[0]);
          $('.services-wrap h3').css('font-family', font[0]);
          $('.services-wrap1 h3').css('font-family', font[0]);
          $('.project-info .zoom').css('font-family', font[0]);
          $('.project-info .info').css('font-family', font[0]);
          $('.project-info-small .zoom').css('font-family', font[0]);
          $('.project-info-small .info').css('font-family', font[0]);
          $('.footer-widget h5').css('font-family', font[0]);
          $('.newsletter input[type="submit"]').css('font-family', font[0]);
          $('.product-info h4').css('font-family', font[0]);
          $('.productr-info h4').css('font-family', font[0]);
          $('.product-price').css('font-family', font[0]);
          $('.banner-bar h3').css('font-family', font[0]);
          $('.banner-btn').css('font-family', font[0]);
          $('.page-head h2').css('font-family', font[0]);
          $('.folio-img .project-info-small .zoom').css('font-family', font[0]);
          $('.folio-img .project-info-small .info').css('font-family', font[0]);
          $('.project-info-small h4').css('font-family', font[0]);
          $('.folio-info h4').css('font-family', font[0]);
          $('.portfolio-single h3').css('font-family', font[0]);
          $('.quote-author').css('font-family', font[0]);
          $('.post-date').css('font-family', font[0]);
          $('.post-title h3').css('font-family', font[0]);
          $('.excerpt-more').css('font-family', font[0]);
          $('.post-item .post-date1').css('font-family', font[0]);
          $('.post-item1 .post-date1').css('font-family', font[0]);
          $('.blog-desc h4').css('font-family', font[0]);
          $('.rmore').css('font-family', font[0]);
          $('.post-item .post-date1').css('font-family', font[0]);
          $('.post-item1 .post-date1').css('font-family', font[0]);
          $('.side-widget h6').css('font-family', font[0]);
          $('.product-post-info p').css('font-family', font[0]);
          $('.number').css('font-family', font[0]);
          $('.more-posts .post-date').css('font-family', font[0]);
          $('.comment-head').css('font-family', font[0]);
          $('.comment-meta .comment-author').css('font-family', font[0]);
          $('.reply-btn').css('font-family', font[0]);
          $('.forum-btn').css('font-family', font[0]);
          $('.forum-btn-style1').css('font-family', font[0]);
          $('.add-cart').css('font-family', font[0]);
          $('.addcart').css('font-family', font[0]);
          $('.product-info2 h4').css('font-family', font[0]);
          $('.filter-btn').css('font-family', font[0]);
          $('.coupon-btn').css('font-family', font[0]);
          $('.cart-submit-btn').css('font-family', font[0]);
          $('.cart-submit-btn1').css('font-family', font[0]);
          $('.coupon-info h4').css('font-family', font[0]);
          $('.order-info h4').css('font-family', font[0]);
          $('.order-info .table thead > tr > th').css('font-family', font[0]);
          $('.cart-info .table thead > tr > th').css('font-family', font[0]);
          $('.cart-info .table tbody > tr > td:nth-child(3)').css('font-family', font[0]);
          $('.cart-info .table tbody > tr > td:nth-child(5)').css('font-family', font[0]);
          $('.order-info .table tbody > tr > td:nth-child(1) span').css('font-family', font[0]);
          $('.order-info .table tbody > tr > td:nth-child(2)').css('font-family', font[0]);
          $('.billing-info h4').css('font-family', font[0]);
          $('.shipping-info h4').css('font-family', font[0]);
          $('.cart-total h4').css('font-family', font[0]);
          $('.cart-shipping h4').css('font-family', font[0]);
          $('.cart-total .amount').css('font-family', font[0]);
          $('.cart-total .amount-blue').css('font-family', font[0]);
          $('.shop-inner-info h4').css('font-family', font[0]);
          $('.shop-produt-info h4').css('font-family', font[0]);
          $('.product-pric').css('font-family', font[0]);
          $('.btn1').css('font-family', font[0]);
          $('.btn3').css('font-family', font[0]);
          $('.btn3:hover').css('font-family', font[0]);
          $('.btn2').css('font-family', font[0]);
          $('.btn4').css('font-family', font[0]);
          $('.sb-more').css('font-family', font[0]);
          $('.shop-banner-info h3').css('font-family', font[0]);
          $('ul.tabs li a').css('font-family', font[0]);
          $('.review .comment-head').css('font-family', font[0]);
          $('.section-title h3').css('font-family', font[0]);
          $('.time span').css('font-family', font[0]);
          $('.time1 span').css('font-family', font[0]);
          $('.blog3-wrap h3').css('font-family', font[0]);
          $('.rprojects h5').css('font-family', font[0]);
          $('.relatedposts h5').css('font-family', font[0]);
          $('.slider-info2 h3 ').css('font-family', font[0]);
          $('.stats-wrap h3').css('font-family', font[0]);
          $('.staff-info h4').css('font-family', font[0]);
          $('.strategy-content-jobs h4').css('font-family', font[0]);
          $('.csoon-wrap h4').css('font-family', font[0]);
          $('.c-subscribe p').css('font-family', font[0]);
          $('.time-c').css('font-family', font[0]);
          $('.time-c span').css('font-family', font[0]);
          $('.contact-info2 h4').css('font-family', font[0]);
          $('.c-btn').css('font-family', font[0]);
          $('.project-info-detail h3').css('font-family', font[0]);
          $('.plan_price').css('font-family', font[0]);
          $('.plan_title').css('font-family', font[0]);
          $('.p-btn a').css('font-family', font[0]);
          $('.popular .p-btn a').css('font-family', font[0]);
          $('#pricing-table h3').css('font-family', font[0]);
          $('#pricing-table h3 span').css('font-family', font[0]);
        });
      });

      $(function(){

        $('#font1').fontselect().change(function(){
        
          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');
          
          // split font into family and weight
          font = font.split(':');
          
          // set family on paragraphs 
          $('body').css('font-family', font[0]);
          $('.shop-menu-info p').css('font-family', font[0]);
          $('.shop-menu-info a').css('font-family', font[0]);
          $('.shop-menu .dropdown-menu li').css('font-family', font[0]);
          $('.menu-style-1 li a span').css('font-family', font[0]);
          $('.nav-main span').css('font-family', font[0]);
          $('#header_2 .navbar-nav-main > li > a').css('font-family', font[0]);
          $('#header_3 .navbar-nav-main > li > a').css('font-family', font[0]);
          $('#header_2 .navbar-default .navbar-nav > li > a').css('font-family', font[0]);
          $('#header_3 .navbar-default .navbar-nav > li > a ').css('font-family', font[0]);
          $('#header_3 .shop-menu .dropdown-menu li ,#header_2 .shop-menu .dropdown-menu li').css('font-family', font[0]);
          $('#header_3 .shop-menu-title ,#header_2 .shop-menu-title').css('font-family', font[0]);
          $('#header_5 .navbar-default .navbar-nav > li > a').css('font-family', font[0]);
          $('#header_5 .shop-menu .dropdown-menu li').css('font-family', font[0]);
          $('#header_5 .shop-menu-title').css('font-family', font[0]);
          $('#hidden-header .navbar-default .navbar-nav > li > a').css('font-family', font[0]);
          $('.page-head h2 span').css('font-family', font[0]);
          $('.post-item .post-date1 span').css('font-family', font[0]);
          $('.post-item1 .post-date1 span').css('font-family', font[0]);
          $('.order-info .icheck').css('font-family', font[0]);
          $('.toggle a.toggle-trigger').css('font-family', font[0]);
          $('.toggle1 a.toggle-trigger1').css('font-family', font[0]);
          $('.timeline .time').css('font-family', font[0]);
          $('.timeline .time1').css('font-family', font[0]);
          $('.plan_price span').css('font-family', font[0]);
          $('#pricing-table h3 span em').css('font-family', font[0]);
          $('.staff-info span').css('font-family', font[0]);
          $('#pricing-table li').css('font-family', font[0]);
        });
      });


      $(function(){

		$('.bgimage a').click(function(e){

			e.preventDefault();

			$(this).parent().parent().find('a').removeClass('active');

			$(this).addClass('active');

			var bg = $(this).css('backgroundImage');

			$('body').css('backgroundImage',bg)

		})
      });


		