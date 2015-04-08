var studiosIds = ["studio1","studio2","studio3","studio4","studio5"];
var contentsIds = ["studio-content1","studio-content2","studio-content3","studio-content4","studio-content5"];

/* ------------------------------------------------ Responsive ------------------------------------------ */	

	function studioresponsive(){

	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Icons Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

		var studiosQuantity = 5;
		var marginIcons = (parseInt($("#studios").css("height"),10) - parseInt($(".adi-section-title").css("height"),10) - parseInt($("#icons").css("height"),10))/2;
		$(".adi-studiosbox-icons").css("height",parseInt($(".adi-studiosbox-icons").css("width"),10)/10); //Proporcion, alto es 1/10 del ancho
		$(".adi-studiosbox-icons").css("margin-top",marginIcons);
		$(".adi-studiosbox-box,.adi-studiosbox-box-active").css("width",$(".adi-studiosbox-box").css("height"));
		var marginWidth = Math.floor((parseInt($(".adi-studiosbox-icons").css("width"),10) - studiosQuantity * parseInt($(".adi-studiosbox-box").css("width"), 10)) / studiosQuantity) - 3; 
		$("#studio1").css("margin-left",Math.floor(marginWidth/2));
		$("#studio2,#studio3,#studio4,#studio5").css("margin-left",marginWidth);
	
	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Text Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

		var textMargin = Math.floor(parseInt($(".adi-studio-content").css("width"),10)*0.025);
		$(".adi-studio-text").css("margin-right",textMargin);
		$(".adi-studio-text").css("margin-left",textMargin);
		var maxHeight = 0;
		for(i = 1 ; i <= studiosIds.length ; i++){
			var container = "#studio-content" + i + " > .adi-studio-text";
			var currentHeight  = parseInt($(container).css("height"),10);
			if(currentHeight > maxHeight){		
				maxHeight = currentHeight;
			}
		}
		if($(window).width() >= 767){
			$("#content").css("height",maxHeight + maxHeight*0.1);
		}else{
			$("#content").css("height",maxHeight + maxHeight*0.1 + parseInt($(".adi-studio-image").css("height"),10));
		}

	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Image Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

		$(".adi-studio-image").css("width",parseInt($("#content").css("width"),10)/5); 
		$(".adi-studio-image").css("height",$(".adi-studio-image").css("width"));
		if($(window).width() >= 767){
			var marginImg = Math.floor((parseInt($("#content").css("height"),10) - parseInt($(".adi-studio-image").css("height"),10))/2);
			$(".adi-studio-image").css("margin-top",marginImg);
			$(".adi-studio-image").css("margin-left",parseInt($(".adi-studiosbox-content").css("width"),10)/8);
		}else{
			var marginImg = Math.floor(parseInt($(".adi-studio-image").css("height"),10)/10);
			$(".adi-studio-image").css("margin-top",marginImg);
			$(".adi-studio-image").css("margin-bottom",marginImg);
			var marginToCenter = Math.floor((parseInt($("#content").css("width"),10) - parseInt($(".adi-studio-image").css("width"),10))/2);
			$(".adi-studio-image").css("margin-left",marginToCenter);	
		}

	}

/*------------------------------------------------- End Responsive -------------------------------------------*/

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% When Document is Ready %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

	$(document).ready(function(){

	studioresponsive();

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

	
	
});

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% When window is resized %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

$(window).resize(function(){

	studioresponsive();

}); 





	
