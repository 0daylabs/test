
jQuery(document).ready(function($)
	{
		
		$("#twitter-feeds").tweet({
			modpath: 'php/twitter',
			username: "envato",
			join_text: "auto",
			count: 8,
			auto_join_text_default: "we said,", 
			auto_join_text_ed: "we",
			auto_join_text_ing: "we were",
			auto_join_text_reply: "we replied to",
			auto_join_text_url: "we were checking out",
			loading_text: "loading tweets..."
		});
		$('.tweet_list').addClass('mp_li mp_carousel');		

});

$(window).load(function()
	{		
		
		update_twitter();
		$(window).resize(function(){
			update_twitter();
		});		   	
		function update_twitter(){
			$(".mp_twitter .mp_carousel").carouFredSel({
				direction: "down",
				height: 'variable',
				width: 'auto',
				items: 1,
				auto: 4000,
				circular: false,
				infinite: true,
				prev:{
					button : function(){
						return $(this).parent().parent().parent().parent().children('.mp_carousel-control').children('a:first-child')
					}
				},
				next:{
					button : function(){
						return $(this).parent().parent().parent().parent().children('.mp_carousel-control').children('a:last-child')
					}
				}
			});
		}	
});

$(document).ready(function () {
	$('.tweet').tweet({
	username: "envato",
	modpath: 'php/twitter',
	count: 3,
	loading_text: 'loading twitter feed...',
	});
});