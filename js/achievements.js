$(document).ready(function(){
	$(".adi-achievement-text").hide(0);
	var px = $(".adi-achievement").width() - $(".adi-achievement").children(".adi-achievement-img").width();

		$(".adi-achievement").stop().mouseenter(function(){	
				$(".adi-achievement-img").css("left","0");
				$(this).stop().children(".adi-achievement-title").stop().fadeOut(300);
				$(this).stop().children(".adi-achievement-img").stop().animate({
						right: "" + $(".adi-achievement").children(".adi-achievement-img").css("left"),
						left: "+=" + px
						},800,function(){		
								$(this).parent().children(".adi-achievement-text").stop().fadeIn(300);
						});
		});
		$(".adi-achievement").stop().mouseleave(function(){	
						$(this).stop().children(".adi-achievement-text").stop().fadeOut(300);
						$(this).stop().children(".adi-achievement-img").stop().animate({
							left: "0",
							right : "+=" + $(".adi-achievement").children(".adi-achievement-img").css("left")
							},800, function(){
								$(this).parent().children(".adi-achievement-title").stop().fadeIn(300);
							});	
					});
});



