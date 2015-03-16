$(document).ready(function(){
	$('ul > li  > a').hover(function(){
		$(this).fadeTo(300,0.5);
	},function(){
		$(this).fadeTo(300,1);
	});
});