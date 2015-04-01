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

	/* ------------------------------------------------ Responsive ------------------------------------------ */
	
});

window.setInterval(function(){

	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Icons Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

	$(".adi-studiosbox-box,.adi-studiosbox-box-active").css("width",$(".adi-studiosbox-box").css("height"));
	var studiosQuantity = 5;
	var marginQuantity = studiosQuantity * 2;
	var marginWidth = ((parseInt($(".adi-studiosbox-icons").css("width"),10) - studiosQuantity * parseInt($(".adi-studiosbox-box").css("width"), 10)) / marginQuantity) - 3;//PX 
	$(".adi-studiosbox-box,.adi-studiosbox-box-active").css("margin-left",marginWidth);
	$(".adi-studiosbox-box,.adi-studiosbox-box-active").css("margin-right",marginWidth);
	$(".adi-studiosbox-icons").css("height",parseInt($(".adi-studiosbox-icons").css("width"),10)/10); //Proporcion, alto es 1/10 del ancho
	var marginIcons = (parseInt($("#studios").css("height"),10) - parseInt($(".adi-section-title").css("height"),10) - parseInt($("#icons").css("height"),10))/2;
	$(".adi-studiosbox-icons").css("margin-top",marginIcons);
	$(".adi-studiosbox-icons").css("margin-bottom",marginIcons);

	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Image Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

	$(".adi-studio-image").css("width",parseInt($("#content").css("width"),10)/5); 
	$(".adi-studio-image").css("height",$(".adi-studio-image").css("width"));
	var marginImg = (parseInt($("#content").css("height"),10) - parseInt($(".adi-studio-image").css("height"),10))/2;
	$(".adi-studio-image").css("margin-top",marginImg);
	$(".adi-studio-image").css("margin-bottom",marginImg);
	$(".adi-studio-image").css("height",$(".adi-studio-image").css("width"));
	$(".adi-studio-image").css("margin-left",parseInt($(".adi-studiosbox-content").css("width"),10)/8);

	/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; Studios Text Responsive ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;, */

	$(".adi-studio-text").css("margin-right",parseInt($(".adi-studiosbox-content").css("width"),10)/5);

},50);



	
