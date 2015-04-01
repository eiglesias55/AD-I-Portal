$(document).ready(function(){
	window.setInterval(function(){
		var customersQuantity = 5;
		var marginQuantity = customersQuantity * 2;
		var customerWidth = Math.floor(parseInt($("#customers-subsection").css("width"),10)/(customersQuantity + 1));
		var customerMargin = (customerWidth - 30) / marginQuantity; //30 px cantidad que descuento para que no desborde el ultimo "customer" del div por las cifras decimales
		var customerMarginToCenter = Math.floor((parseInt($("#customers-subsection").css("height"),10) - parseInt($(".adi-customer-img").css("height"),10)) / 2);  
		$("#customers-subsection").css("height",Math.floor(parseInt($("#customers-subsection").css("width"),10)/10)); // Proporcion, Alto de la seccion es 1/10 del Ancho		
		$(".adi-customer-img").css("width",customerWidth);
		$(".adi-customer-img").css("height",parseInt($("#customers-subsection").css("height"),10)*3/5);
		$(".adi-customer-img").css("margin-left",customerMargin);
		$(".adi-customer-img").css("margin-right",customerMargin);
		$(".adi-customer-img").css("margin-top",customerMarginToCenter);
		$(".adi-customer-img").css("margin-bottom",customerMarginToCenter);
	},50);
});