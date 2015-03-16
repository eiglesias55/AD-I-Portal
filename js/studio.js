

$(document).ready(function(){

	var studiosIds = ["studio1","studio2","studio3","studio4"];
	var contentsIds = ["spin-content1","spin-content2","spin-content3","spin-content4"];

	function changeStudio(){
		for(i = 0 ; i < contentsIds.length ; i++){
			if($("#"+contentsIds[i]).css("display") == "block"){
				var dataTrigger = $("#"+studiosIds[i]).data("trigger");
				$("#"+dataTrigger).hide(0);
				if(i == contentsIds.length - 1){
					var dataTrigger = $("#"+studiosIds[0]).data("trigger");
				}else{
					var dataTrigger = $("#"+studiosIds[i+1]).data("trigger");
				}
	
				$("#"+dataTrigger).fadeIn(0);
			}
		}
	}

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

	window.setInterval(changeStudio,1000);

});



	
