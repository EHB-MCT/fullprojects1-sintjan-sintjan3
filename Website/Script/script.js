
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".header").css("background" , "none");
        }
  
        else{
            $(".header").css("background" , "#FFCC00");  	
        }
    });
  });