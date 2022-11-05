// PRELOADER PART START
$(window).on('load', function(){
      $(".preloader").delay(100).fadeOut(200)
    });


// PRELOADER PART END
    
// BACKTOTOP PART START
    $(".back2top").click(function(){
      $("html, body").animate({
        scrollTop:0
      },1000)
    })
    
    $(window).scroll(function(){
      var scrolling = $(window).scrollTop() 
      if (scrolling > 20){ $(".back2top").fadeIn()}
      else { $(".back2top").fadeOut()}
    });
    
// BACKTOTOP PART END

// MENUBAR PART START
$(window).scroll(function(){
      var scrolling = $(window).scrollTop();
      if (scrolling > 20){
        $(".menu_bg").addClass("bg")
      }
      else{
        $(".menu_bg").removeClass("bg")
      }
    });
   // MENUBAR PART END


// CLIENT PART SLIDER START
$('.client_part').slick({     
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:false,
      prevArrow: ".client_prev",
      nextArrow: ".client_next",
});
// CLIENT PART SLIDER END

// WORK PART MIXITUP START


var mixer = mixitup('.workCard_part');

$('button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
    // WORK PART MIXITUP END

    