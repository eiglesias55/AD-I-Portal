$(document).ready(function () {
	
	//cambio de colores de imagenes en #adi-from-inside on hover
	
	$(".carousel-item.selected img + img, #carousel-buttons").hover(function () {
		$(".carousel-item.selected img + img").css("opacity", "0");
	}, function () {
		$(".carousel-item.selected img + img").css("opacity", "1");
	});
	
	
	//carousel de #adi-from-inside
	setInterval(function () {
		var carouselActivo = $(".carousel-item.selected").attr("id");
		$("#" + carouselActivo).removeClass("selected");
		var numeroCarousel = parseInt(carouselActivo.substr(-1));
		$("#carousel-button-" + numeroCarousel).removeClass("selected");
		numeroCarousel++;
		if ((numeroCarousel-1) == $(".carousel-item").length) {
			numeroCarousel = 1
		}
		$("#carousel-button-" + numeroCarousel).addClass("selected");
		$("#carousel-item-" + numeroCarousel).addClass("selected");
		
		$(".carousel-button").click(function () {
			$(".carousel-button").removeClass("selected");
			$(".carousel-item").removeClass("selected");
			$(this).addClass("selected");
			carouselActivo = $(".carousel-button.selected").attr("id");
			numeroCarousel = parseInt(carouselActivo.substr(-1));
			$("#carousel-item-" + numeroCarousel).addClass("selected");
		});
	
	}, 4000);
	

	
});