$(document).ready(function(){
	$(".adi-number-box").stop().hover(function(){
		$(this).animate({
    			marginLeft:"20",
    			marginRight:"-20"
  				}, 200)
	});
});