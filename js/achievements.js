function achievementsresponsive(){

	/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Achievement Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

	var achievementWidth = parseInt($("#achievements-subsection").css("width"),10)*0.8;
	$(".adi-achievement").css("width", achievementWidth);
	var achievementHeight = achievementWidth*0.15;
	$(".adi-achievement").css("height", achievementHeight);	

	/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Img Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

	var imgSize = parseInt($(".adi-achievement").css("height"),10) - 3;
	$(".adi-achievement-img").css("width", imgSize);
	$(".adi-achievement-img").css("height", imgSize);

	/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Text Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

	var imgSize = (parseInt($(".adi-achievement").css("height"),10) - parseInt($(".adi-achievement-title").css("height"),10)) / 2;
	$(".adi-achievement-title").css("margin-top", imgSize);
	
}

function achievementeffect(px){

	$(".adi-achievement-text").hide(0);

/* -------------------------------------------------- Mouse enter --------------------------------------------------------- */

		$(".adi-achievement").stop().mouseenter(function(){	
			if($(window).width() >= 767){
				$(this).stop().children(".adi-achievement-title").stop().fadeOut(300);
				$(this).stop().children(".adi-achievement-img").stop().animate({
						right: $(".adi-achievement").children(".adi-achievement-img").css("left"),
						left: px
						},800,function(){
								$(this).parent().children(".adi-achievement-text").stop().fadeIn(300);
						});
			}
		});

/* --------------------------------------------------- Mouse leave --------------------------------------------------------- */

		$(".adi-achievement").stop().mouseleave(function(){	
			if($(window).width() >= 767){
						$(this).stop().children(".adi-achievement-text").stop().fadeOut(300);
						$(this).stop().children(".adi-achievement-img").stop().animate({
							left: "0",
							right: "+=" + $(".adi-achievement").children(".adi-achievement-img").css("left")
							},800, function(){
								$(this).parent().children(".adi-achievement-title").stop().fadeIn(300);
							});	
			}
		});

}

$(document).ready(function(){

	achievementsresponsive();

	var px = $(".adi-achievement").width() - $(".adi-achievement").children(".adi-achievement-img").width();

	achievementeffect(px);	

	
});

$(window).resize(function(){

	achievementsresponsive();

	var px = $(".adi-achievement").width() - $(".adi-achievement").children(".adi-achievement-img").width();

	achievementeffect(px);	

});





