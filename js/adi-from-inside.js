$(document).ready(function () {
	
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

