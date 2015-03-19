$(document).ready(function(){
	$(".adi-number-box").stop().hover(function(){
		$(".adi-number-number").animate({
    			marginLeft:"10",
    			marginRight:"-10"
  				}, 100,function(){
  					$(".adi-number-number").animate({
    					marginLeft:"-10",
    					marginRight:"10"
  				}, 100);
  				});
  		$(".adi-number-text").animate({
				marginLeft:"-10",
				marginRight:"10"
				}, 100,function(){
					$(".adi-number-text").animate({
						marginLeft:"10",
						marginRight:"-10"
						}, 100);
				});
		
	});
});