

$(document).ready(function () {
	var maxHeight;
	var heights = $(".adi-testimonials").map(function ()
    {
        return $(this).height();
    }).get();

    maxHeight = Math.max.apply(null, heights);
	
	$(".adi-testimonials").each(function () {
		var thisHeight = $(this).height();
		if ( thisHeight < maxHeight ) {
			$(this).css("top", ((maxHeight-thisHeight)/2) + "px" );
		}
	
	});
});

$(window).resize(function () {
	var maxHeight;
	var heights = $(".adi-testimonials").map(function ()
    {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);
	
	$(".adi-testimonials").each(function () {
		var thisHeight = $(this).height();
		if ( thisHeight < maxHeight ) {
			$(this).css("top", ((maxHeight-thisHeight)/2) + "px" );
		}
	
	});
});


function vAlignTestimonials () {
	var maxHeight;
	var heights = $(".adi-testimonials").map(function ()
    {
        return $(this).height();
    }).get(),

    maxHeight = Math.max.apply(null, heights);
	
	$(".adi-testimonials").each(function () {
		var thisHeight = $(this).height();
		if ( thisHeight < maxHeight ) {
			$(this).css("top", ((maxHeight-thisHeight)/2) + "px" );
		}
	
	});

}