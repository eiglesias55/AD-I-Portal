$(document).ready(function(){

	var studiosIds = ["studio1","studio2","studio3","studio4","studio5"];
	var contentsIds = ["spin-content1","spin-content2","spin-content3","spin-content4","spin-content5"];

	for(i = 0 ; i < studiosIds.length ; i++){
		$("#"+studiosIds[i]).hover(function(){
			var dataTrigger = $(this).data("trigger");
			$(".adi-spin-content > * ").stop().fadeOut(0)
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().fadeIn(300);
			});
	}

	$(".adi-studiosbox-box").hover(function(){
		$(this).stop().fadeTo(200,0.7);
	},function(){$(this).stop().fadeTo(200,1);
	});

	$("#studio4").click(function(){
		$("#studio4 a img").attr("src","Img/digital-content-clicked.png");
	});

	window.setInterval(function(){
		var i=0;
		while($("#"+contentsIds[i]).css("display") != "block"){
			i++;
		}

		$("#"+contentsIds[i]).stop().fadeOut(0);


		if(i == contentsIds.length - 1){
			i=-1;
		}

		$("#"+contentsIds[i+1]).stop().fadeIn(0);	
	},4000);

});



	
