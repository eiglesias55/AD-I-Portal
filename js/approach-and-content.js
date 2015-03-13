$(document).ready(function(){

	$('.adi-graph-board').hide(0);

	var graphsIds = ["graph-services","graph-technologies","graph-certifications","graph-deliverymodel","graph-qualitymodel","graph-tools"]

	for(i = 0 ; i < graphsIds.length ; i++){
		$("#"+graphsIds[i]).click(function(){
			var dataTrigger = $(this).data("trigger");
			$(".adi-graph-board > * ").stop().fadeOut(0);
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().fadeIn(300);
			});
		$("#"+graphsIds[i]).click(function(){
			$(".adi-graphbox").animate({
    			opacity: 0.8,
    			marginLeft:"100",
    			marginRight:"-100"
  				}, 1000, function() {
  				$('.adi-graph-board').show(500);	
  			});

		});
	}
	$('.adi-graphbox-box').hover(function(){
		$(this).stop().fadeTo(200,0.7);
	},function(){
		$(this).stop().fadeTo(200,1.3);
	});
});