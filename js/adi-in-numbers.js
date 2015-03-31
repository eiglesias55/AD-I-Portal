$(document).ready(function(){
	

	window.setInterval(function(){

		$(".adi-number-box").css("height",parseInt($("#content").css("width"),10)/5);
		$(".adi-studio-image").css("height",$(".adi-studio-image").css("width"));

	});

});