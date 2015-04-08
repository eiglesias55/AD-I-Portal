function adiinnumbersresponsive(){

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Proporciona las box ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		$(".adi-number-box").css("height",parseInt($("#adiinnumbers-subsection").css("height"),10)*4/5);

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Centra las box ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		var marginToCenter = (parseInt($("#adiinnumbers-subsection").css("height"),10) - parseInt($(".adi-number-box").css("height"),10))/2; 

		$(".adi-number-box").css("margin-top",marginToCenter);

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Proporciona el icono ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		$(".adi-number-icon").css("height",parseInt($("#adiinnumbers-subsection").css("height"),10)*1/6);
		$(".adi-number-icon").css("width",$(".adi-number-icon").css("height"));
		
}

$(document).ready(function(){

	adiinnumbersresponsive();
});

$(window).resize(function(){

	adiinnumbersresponsive();

});