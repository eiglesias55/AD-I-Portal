$(document).ready(function(){	
	window.setInterval(function(){
		$("#stack-of-applications-apps").css("height",parseInt($("#stack-of-applications-apps").css("width"),10) * 9/50); //Proporcion de la imagen;
		$("#stack-of-applications-tools").css("height",parseInt($("#stack-of-applications-tools").css("width"),10) * 14/50); //Proporcion de la imagen;
		$("#stack-of-applications-services").css("height",parseInt($("#stack-of-applications-services").css("width"),10) * 14/50); //Proporcion de la imagen;
	},50);
});