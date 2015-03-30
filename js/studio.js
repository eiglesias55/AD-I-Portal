	$(document).ready(function(){

	var studiosIds = ["studio1","studio2","studio3","studio4","studio5"];
	var contentsIds = ["studio-content1","studio-content2","studio-content3","studio-content4","studio-content5"];
	var studioClicked = false;
	var studioHover = false;

	for(i = 0 ; i < studiosIds.length ; i++){
		$("#"+studiosIds[i]).hover(function(){
			studioHover = true;
			$(".adi-studiosbox-content > * ").stop().hide(0);
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().show(0);
			}, function(){ 
				studioHover = false});
				$("#"+studiosIds[i]).click(function(){
					studioClicked = true;
					var actual = 0;
					while($("#"+studiosIds[actual]).attr("class") != "adi-studiosbox-box-active"){
								actual++;
						}	
					$("#"+studiosIds[actual]).removeClass();
					$("#"+studiosIds[actual]).addClass("adi-studiosbox-box");
					$(this).removeClass();
					$(this).addClass("adi-studiosbox-box-active");
					var dataTrigger = $(this).data("trigger");
					$("#" + dataTrigger).stop().fadeIn(300);
					});
	}

	/* ------------------------------------------------ hover ------------------------------------------------------ */


	$(".adi-studiosbox-box,.adi-studiosbox-box-active").hover(function(){
		$(this).stop().fadeTo(200,0.7);
	},function(){$(this).stop().fadeTo(200,1);
	});

	/* ----------------------------------------------- Studio autochange ------------------------------------------ */

		window.setInterval(function(){
			if (studioClicked == false && studioHover == false){
				var i=0;
				while($("#"+studiosIds[i]).attr("class") != "adi-studiosbox-box-active"){
						i++;
				}
				$("#"+studiosIds[i]).removeClass();
				$("#"+studiosIds[i]).addClass("adi-studiosbox-box");
				$(".adi-studiosbox-content > * ").stop().hide(0);
				if(i == contentsIds.length - 1){
					i=-1;
				}
				$("#"+contentsIds[i+1]).stop().fadeIn(0);
				$("#"+studiosIds[i+1]).removeClass();
				$("#"+studiosIds[i+1]).addClass("adi-studiosbox-box-active");	
			}else{
				studioClicked = false;	
			}
		},4000);

	/* ------------------------------------------------------------------------------------------------------------- */
});



	
