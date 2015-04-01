$(document).ready(function(){
	

	window.setInterval(function(){

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Proporciona la sección ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		$("#adiinnumbers-subsection").css("height",parseInt($("#adiinnumbers-subsection").css("width"),10)*11/50);

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Proporciona las box ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		$(".adi-number-box").css("height",parseInt($("#adiinnumbers-subsection").css("height"),10)*4/5);

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Centra las box ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		var marginToCenter = (parseInt($("#adiinnumbers-subsection").css("height"),10) - parseInt($(".adi-number-box").css("height"),10))/2; 

		$(".adi-number-box").css("margin-top",marginToCenter);

/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Proporciona el icono ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

		$(".adi-number-icon").css("height",parseInt($("#adiinnumbers-subsection").css("height"),10)*1/6);
		$(".adi-number-icon").css("width",$(".adi-number-icon").css("height"));
		
	});

});


1/6