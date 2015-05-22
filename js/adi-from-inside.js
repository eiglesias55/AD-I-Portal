$(document).ready(function () {
	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
		}, 500);
	});
	
	
	$("#ga-life").scrollLeft(999999);
	var maxScrollLeft = $("#ga-life").scrollLeft();
	$("#ga-life").scrollLeft(0);
	
	$("#ga-life").scroll(function () {
		var leftDisplacement = $(this).scrollLeft();
		if ( leftDisplacement < 100 ) {
			leftDisplacement = leftDisplacement / 100;
			$("#adi-from-inside #before").css("opacity", leftDisplacement.toString() );
		} 
		else if ( leftDisplacement > 100) {
			$("#adi-from-inside #before").css("opacity", "1" );
		}
		else if ( leftDisplacement > (maxScrollLeft -100) ) {
			leftDisplacement = (leftDisplacement-maxScrollLeft)/100
			$("#adi-from-inside #before").css("opacity", leftDisplacement.toString() );
		} else if ( leftDisplacement < (maxScrollLeft - 100) ) {
			$("#adi-from-inside #before").css("opacity", "1" );
		}
		
			
	});
	
});

