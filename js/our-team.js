$(document).ready(function(){
  $("#paragraph2,#paragraph3").hide(0);
  $(".adi-scroll-button img").click(function(){
    $(this).hide(0);
    if($("p#paragraph2").is(":hidden")){
      $("#paragraph2,p#paragraph3").slideDown(1000);
      $(".adi-scroll-button img").attr("src","Img/upButton.png");
      $(this).show(1000);
    }else{
      $("#paragraph2,p#paragraph3").slideUp(1000);
      $(".adi-scroll-button img").attr("src","Img/downButton.png");
      $(this).show(1000); 
    }
  });
});