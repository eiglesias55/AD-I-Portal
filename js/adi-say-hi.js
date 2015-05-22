$(document).ready(function () {
	
	var sectionWidth = $("#adi-say-hi").width();
	$("#adi-say-hi").height(sectionWidth/1.87);
	
});

$(window).resize(function () {
		var sectionWidth = $("#adi-say-hi").width();
		$("#adi-say-hi").height(sectionWidth/1.87);
});