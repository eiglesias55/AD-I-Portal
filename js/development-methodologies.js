$(document).ready(function () {
	
	$("#development-methodologies li").click(function () {
		if ($(this).not(".selected")) {
			$("#development-methodologies li").removeClass("selected");
			$(".devmeth-text").slideUp(500);
			$(this).addClass("selected");
			var botonSeleccionado = $(this).attr("id");
			var numeroSeleccionado = parseInt(botonSeleccionado.substr(-1));
			$("#devmeth-text-"+numeroSeleccionado).slideDown(500);
		}
	});
	
	setTimeout(function () {
		$("#development-methodologies").css("margin-left", "10%");
	}, 500);
	
	setTimeout(function () {
		$("#devmeth-text-1").fadeIn(1000);
	}, 500);
	
});