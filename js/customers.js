function customersresponsive(){

		$("#customers-subsection").css("height",Math.floor(parseInt($("#customers-subsection").css("width"),10)/8)); // Proporcion, Alto de la seccion es 1/10 del Ancho		
		var customersQuantity = 5;
		var marginQuantity = customersQuantity * 2;
		var customerWidth = Math.floor(parseInt($("#customers-subsection").css("width"),10)/(customersQuantity + 1));
		var customerMargin = (customerWidth - 30) / marginQuantity; //30 px cantidad que descuento para que no desborde el ultimo "customer" del div por las cifras decimales
		$(".adi-customer-img").css("width",customerWidth);
		var customerMarginToCenter = Math.floor((parseInt($("#customers-subsection").css("height"),10) - parseInt($(".adi-customer-img").css("height"),10)) / 2);  
		$(".adi-customer-img").css("height",parseInt($("#customers-subsection").css("height"),10)*2/5);
		$(".adi-customer-img").css("margin-left",customerMargin);
		$(".adi-customer-img").css("margin-right",customerMargin);
		$(".adi-customer-img").css("margin-top",customerMarginToCenter);
		$(".adi-customer-img").css("margin-bottom",customerMarginToCenter);
}

$(document).ready(function(){		
	customersresponsive();
});

$(window).resize(function(){
	customersresponsive();
});