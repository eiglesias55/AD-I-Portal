$(document).ready(function(){

	var graphsIds = ["graph-services","graph-technologies","graph-certifications","graph-deliverymodel","graph-qualitymodel","graph-tools"]

	for(i = 0 ; i < graphsIds.length ; i++){
		$("#"+graphsIds[i]).hover (function(){
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().fadeIn(300);
		},function(){
			var dataTrigger = $(this).data("trigger");
			$("#" + dataTrigger).stop().fadeOut(0);
		});
	}
});