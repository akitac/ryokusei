
//pc animation//


/* HTMLを読み込んだ後に実行 */
$(function(){


    $(".header_nav_item").on("click",function(){
        /* header_nav_itemをクリックしたらidを付与する */
        var thisId = $(this).attr("id");
        console.log(thisId)
        var childClass = "." + thisId + "-child";
        $(childClass).slideDown();
        console.log(childClass)
    });

    $(".header_nav_item").on("mouseleave",function(){
        var thisId = $(this).attr("id");
        var childClass = "." + thisId + "-child" ;
        $(childClass).slideUp();
    });



    function fadeAnime(){
        $(".fadeup").each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
                $(this).addClass("fadeUp");
            }
        });
    
        $('.fadeleft').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeLeft');
            }
            });
        
        $('.faderight').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass('fadeRight');
            }
            });
        
    }
    
    
    $(window).scroll(function (){
        fadeAnime();
        });


    
    
    //sp animation
    
    
    
        $(".sp_menu").on("click",function(){
            $("#sp_nav").toggleClass("open");
            $("#sp_subnav").toggleClass("open");
        });
        
    
        $("#sub_list").on("click",function(){
            $(".sp_aco").slideToggle();
        });

        $("#sp .footer_nav_flex").on("click",function(){
            $(this,".footer_nav_flex").toggleClass("open");
            $(".footer_nav_list" ,this).slideToggle(500);
        });
    
    /*
    var windowWidth = $(window).width();
    var windowSm = 768;
    console.log(windowWidth);


    if (windowWidth <= windowSm) {
        $(".footer_nav_flex").on("click",function(){
            $(this,".footer_nav_flex").toggleClass("open");
            $(".footer_nav_list" ,this).slideToggle(500);
        });
    } else if (windowWidth >= windowSm)  {
        $(".footer_nav_flex").removeClass();
    }

    var windowWidth = $(window).width();
    var windowSm = 768;
    console.log(windowWidth);

    
    var windowWidth = window.innerWidth;
    console.log(windowWidth);

    var windowSize = $(window).width();

        if (windowSize < 768) {
        console.log('Medium!');
        $(".footer_nav_flex").on("click",function(){
            $(this,".footer_nav_flex").toggleClass("open");
            $(".footer_nav_list" ,this).stop().slideToggle(500);
          });
        } else {
        console.log('Large!');
}


    $(window).on(resize,function () {
        var windowSize = window.innerWidth;
      
        if (windowSize < 768) {
          console.log(medium);
          $(".footer_nav_flex").on("click",function(){
            $(this,".footer_nav_flex").toggleClass("open");
            $(".footer_nav_list" ,this).stop().slideToggle(500);
          });
        
        } else {
          console.log('large');
        }
    });

    */
 

});
