$(document).ready(function(){
	$(".adi-achievement-text").hide(0);
	var px = $(".adi-achievement").width() - $(".adi-achievement").children(".adi-achievement-img").width();

		$(".adi-achievement").stop().mouseenter(function(){	
				$(this).stop().css("box-shadow","5px 5px 5px");
				$(this).stop().children(".adi-achievement-title").stop().fadeOut(300);
				$(this).stop().children(".adi-achievement-img").stop().animate({
						left: "+=" + px	,
						},500,function(){		
								$(".adi-achievement-text").stop().fadeIn(300);
						});
				var notLeave = true;
					$(".adi-achievement").stop().mouseleave(function(){	
						$(this).stop().css("box-shadow","0px 0px 0px");
						$(this).stop().children(".adi-achievement-text").stop().fadeOut(300);
						$(this).stop().children(".adi-achievement-img").stop().animate({
							left : "-=" + px,
							},500, function(){
								$(".adi-achievement-title").stop().fadeIn(300);
								
							});	
					});
		});
});

