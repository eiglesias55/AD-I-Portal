$(document).ready(function(){

	var studiosIds = ["studio1","studio2","studio3","studio4","studio5"];
	var contentsIds = ["studio-content1","studio-content2","studio-content3","studio-content4","studio-content5"];
	var studioClicked = false;

	for(i = 0 ; i < studiosIds.length ; i++){
		$("#"+studiosIds[i]).hover(function(){
			var dataTrigger = $(this).data("trigger");
			$("#"+studiosIds[i]).css("border","2px solid black");
			$(".adi-studiosbox-content > * ").stop().hide(0);
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().show(0);
			});
		$("#"+studiosIds[i]).click(function(){
			studioClicked = true;
			$("#"+studiosIds[i]).css("border","2px solid black");
			var dataTrigger = $(this).data("trigger");
			$(".adi-studiosbox-content").jQuery(":visible").stop().fadeOut(0);
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

		/*window.setInterval(function(){
			if (studioClicked == false){
				var i=0;
				while($("#"+contentsIds[i]).css("display") != "block"){
						i++;
				}
				$("#"+contentsIds[i]).stop().fadeOut(0);
				if(i == contentsIds.length - 1){
					i=-1;
				}
				$("#"+contentsIds[i+1]).stop().fadeIn(0);	
			}else{
				studioClicked = false;	
			}
		},4000);*/
});



	
