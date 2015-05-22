$(document).ready(function () {
	
	var imgHeight = $("#ga-life-1").height();
	$("#ga-life").height(imgHeight);
	
	var i = 1;
	setInterval(function () {
		$("#ga-life-" + i).fadeOut(500);
		i++;
		if (i > $("#ga-life img").length) {
			i = 1;
		}
		$("#ga-life-" + i).fadeIn(500);
	}, 4000);
	
	
	
});

$(window).resize(function () { 
		var imgHeight = $("#ga-life-1").height();
		$("#ga-life").height(imgHeight);
	});
