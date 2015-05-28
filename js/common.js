$(document).ready(function () {
	
	var url = window.location.href;	
	var urlAnchorPosition = url.indexOf('#');
	url = url.substr(urlAnchorPosition+1);
	if ( urlAnchorPosition > -1 ) {
		
		$('html, body').animate({
			scrollTop: $('[name="' + url + '"]').offset().top
		}, 1500);
		
		return false;
	}
	
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