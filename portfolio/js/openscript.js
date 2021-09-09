$(function(){
    $(window).on("load",function(){


        $(".textboxline").stop().fadeOut();
        $(".circle").stop().fadeOut();
        $(".box:nth-child(1) .textboxWrap").stop().animate({"left":"100%"},1500);
        $(".box:nth-child(2) .textboxWrap").stop().animate({"left":"-100%"},1500);
        $(".box:nth-child(3)").stop().animate({"width":"100%"},1500);
        $(".btn").stop().fadeOut(300);
        $(".btnhover").stop().fadeIn(300);

    });

});