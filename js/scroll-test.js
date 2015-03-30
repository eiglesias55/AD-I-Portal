$(document).ready(function(){

    var sectionsIds = ["#s1","#s2","#s3","#s4"];
    var sectionsScrollTop = ["","","",""];
    var actualPosition = 0;
    var scrolling = false;

 if (document.addEventListener) {
    document.addEventListener("mousewheel", MouseWheelHandler(scrolling), false);
    document.addEventListener("DOMMouseScroll", MouseWheelHandler(scrolling), false);
} else {
    sq.attachEvent("onmousewheel", MouseWheelHandler(scrolling));
}

for (var i = 0; i < sectionsScrollTop.length; i++) {
    sectionsScrollTop[i] = $(sectionsIds[i]).offset().top;
};


function moveUp(){
     if(actualPosition != 0 && scrolling == false){
                scrolling=true;
                actualPosition--;
                $(".adi-field-of-view").stop().animate({scrollTop : sectionsScrollTop[actualPosition] },1000,function(){
                    scrolling=false;
                });
                $("#bullet" + (actualPosition + 2)).fadeOut(0,function(){
                $("#bullet" + (actualPosition + 2)).attr("src","Img/bullet-icon.png");
                $("#bullet" + (actualPosition + 2)).fadeIn(100,function(){
                    $("#bullet" + (actualPosition+1)).fadeOut(0,function(){
                        $("#bullet" + (actualPosition+1)).attr("src","Img/full-bullet-icon.png");
                        $("#bullet" + (actualPosition+1)).fadeIn(100);   
                    });                   
                });
            });

            }   
}

function moveDown(){
   if(actualPosition != sectionsIds.length - 1 && scrolling == false){
            scrolling=true;
            actualPosition++;
            $(".adi-field-of-view").stop().animate({scrollTop : sectionsScrollTop[actualPosition] },1000,function(){
                scrolling=false;
            });
            $("#bullet" + actualPosition).fadeOut(0,function(){
                $("#bullet" + actualPosition).attr("src","Img/bullet-icon.png");
                $("#bullet" + actualPosition).fadeIn(100,function(){
                    $("#bullet" + (actualPosition+1)).fadeOut(0,function(){
                        $("#bullet" + (actualPosition+1)).attr("src","Img/full-bullet-icon.png");
                        $("#bullet" + (actualPosition+1)).fadeIn(100);   
                    });                   
                });
            });
               
       }
}

$(this).bind("keyup",function(e){
    var key = e.keyCode;
    if(key == 38){
        moveUp();
    }else{
        if(key == 40){
        moveDown();
        }
    }

});

function MouseWheelHandler() {
    return function (e) {

    	e.preventDefault();
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        
        if (delta < 0) {
            moveDown();  
        }
        else {
            moveUp();  
        }
        return false;
    }
}

});
