
$(function(){

    AOS.init(); //aos 플러그인 동작 실행

    // 처음에 스크롤바 위치 0

    $(window).on("load",function(){

        $("html,body").stop().animate({"scrollTop":0},10);
    });
        
    //imageProgress
    imagesProgress();
    function imagesProgress(){
        var $container = $("#progress"),
            $progressBar = $container.find(".progress-bar"),
            $progressText = $container.find(".progress-text"),
            imgLoad = imagesLoaded("body"),	
            imgTotal = imgLoad.images.length,	
            imgLoaded = 0,										
            current = 0,							
            progressTimer = setInterval(updateProgress, 2000 / 60);

        imgLoad.on("progress", function(){
            imgLoaded++;
        });

        function updateProgress(){
            var target = ( imgLoaded / imgTotal) * 100;

            current += ( target - current) * 0.1;
            $progressBar.css({ width: current + '%' });
            $progressText.text( Math.floor(current) + '%' );

            if(current >= 100){
                clearInterval(progressTimer);
                $container.addClass("progress-complete");
                $progressBar.add($progressText)
                    .delay(500)
                    .animate({opacity: 0},250,function(){
                        $container.animate({top: '50%', height: 0},1000,'easeInOutQuint');
                    });
                    $("body").addClass("active");
            }
            if(current > 99.9){
                current = 100;
            }
        }	
    }

    //웹브라우저 창 로딩이 전부 끝나면 스크롤바 위치0으로

    $(window).on("load",function(){

        $("html,body").stop().animate({"scrollTop":0},10); 
        
    });

   //typing
   const content = "Web Publisher \n Hana Park.";
    const text = document.querySelector(".text");
    let i = 0;

    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)

    //스크롤다운메뉴 클릭시 스크롤 부분
    let firstsec;

    $(".scrolldown").on("click",function(event){
        
        event.preventDefault();
        
        firstsec = $("#container2 .cont").eq(0).offset().top;
        
        $("html,body").stop().animate({"scrollTop":firstsec},1000,"easeOutBack");
        
    });

    //메뉴 클릭시 스크롤 부분
    let secMove;

    $(".rightmenu li").on("click",function(event){
        
        event.preventDefault();
        
        let seclist = $(this).index();
        secMove = $("#container2 .cont").eq(seclist).offset().top;
        
        $("html,body").stop().animate({"scrollTop":secMove},1000);
        
    });
        

    //top버튼 눌렀을씨 맨위로
    $(".topBtn").on("click",function(){

        $("html,body").stop().animate({"scrollTop":0},1000); 
        
    });

    //workWrap 가로스크롤 기능

    $(window).scroll(function () {
        const wScroll = $(this).scrollTop();
        const $cont1 = $('#container2 .cont:nth-child(1)');
        const $cont2 = $('#container2 .cont:nth-child(2)');

        if( wScroll > $cont1.offset().top ){
            $cont2.addClass('visible');
        }else{
            $cont2.removeClass('visible');
        }

        var offsetLeft = (wScroll - $cont2.offset().top);
        if(wScroll > $cont2.offset().top + 1000){
            gsap.to($cont2.find('.workWrap'), {left:-offsetLeft + 1000 +"px"});
        }else{
            $cont2.find('.workWrap').css("left",+ 0 +"px");
        }
    });

});