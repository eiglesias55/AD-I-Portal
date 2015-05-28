$(document).ready(function () {
	
	$('a').click(function(){
		var firstCharOfLink = $(this).attr('href');
		firstCharOfLink = firstCharOfLink.substr(0,1);
		if ( firstCharOfLink == '#' ) {
			$('html, body').animate({
				scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
			}, 500);
			return false;
		}
	});
});