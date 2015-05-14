$(document).ready(function () {
	
	//cambio de colores de imagenes en #adi-from-inside on hover
	
	$(".carousel-item img + img, #carousel-buttons, #adi-from-inside h1").hover(function () {
		$(".carousel-item.selected img + img").css("opacity", "0");
	}, function () {
		$(".carousel-item.selected img + img").css("opacity", "1");
	});
	
	
	//carousel de #adi-from-inside
	var movimientoCarousel;
	
	function iniciarCarousel () {
		movimientoCarousel = setInterval(function () {
			var carouselActivo = $(".carousel-item.selected").attr("id");
			setTimeout( function () {
				$("#" + carouselActivo).removeClass("selected");
			}, 1000);
			var numeroCarousel = parseInt(carouselActivo.substr(-1));
			$("#carousel-button-" + numeroCarousel).removeClass("selected");
			numeroCarousel++;
			if ((numeroCarousel-1) == $(".carousel-item").length) {
				numeroCarousel = 1
			}
			$("#carousel-button-" + numeroCarousel).addClass("selected");
			$("#carousel-item-" + numeroCarousel).addClass("selected");
		}, 4000);
	}
	
	iniciarCarousel();
	
	
	$(".carousel-button").click(function () {
		$(".carousel-button.selected").removeClass("selected");
		var carouselActivo = $(".carousel-item.selected").attr("id");
		$("#" + carouselActivo).addClass("goUnder");
		setTimeout(function () {
			$("#" + carouselActivo).removeClass("selected").removeClass("goUnder");
		}, 600);
		$(this).addClass("selected");
		var botonActivo = $(this).attr("id");
		var numeroCarousel = parseInt(botonActivo.substr(-1));
		$("#carousel-item-" + numeroCarousel).addClass("selected");
		clearInterval(movimientoCarousel);
		setTimeout(iniciarCarousel(), 2000);
	});

	
});

