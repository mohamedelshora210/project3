$(window).scroll(function() {
    
        x = $(window).scrollTop();
    
        if(x > 500){
            $('.go').css('opacity',"1")
        }else{
            $('.go').css('opacity',"0")
        }
    
    });
    new WOW().init();