"use strict";

(function ($) {
  "use strict";

  //  Slider slider
    $('.hero-slider').owlCarousel({
      items: 1,
      margin: 20,
      loop: true,
      autoplay: false,
      animateOut: 'fadeOut',
      autoplayTimeout: 8000,
      dots: true,
      nav: false,
      lazyLoad: true,
     
      // autoplayTimeout: 3000,
      //  autoplaySpeed: 3000, 
  });

  //  slide-feature-1
    $('.slide-feature-1').owlCarousel({
      items: 6,
      margin: 30,
      loop: false,
      autoplay: true,
      animateOut: 'fadeOut',
      autoplayTimeout: 8000,
      dots: false,
      nav: true,
      lazyLoad: true,
      responsive: {
        0: {
            items: 1, 
        },
        600: {
            items: 2, 
        },
        1000: {
            items: 4, 
        },
        1200: {
            items: 6, 
        }
      }
      // autoplayTimeout: 3000,
      //  autoplaySpeed: 3000, 
  });
  //  slide-feature-1
    $('.slide-feature-2').owlCarousel({
      items: 5,
      margin: 30,
      loop: true,
      autoplay: false,
      animateOut: 'fadeOut',
      autoplayTimeout: 8000,
      dots: false,
      nav: true,
      lazyLoad: true,
      responsive: {
        0: {
            items: 1, 
        },
        600: {
            items: 2, 
        },
        1000: {
            items: 3, 
        },
        1200: {
            items: 5, 
        }
      }
      // autoplayTimeout: 3000,
      //  autoplaySpeed: 3000, 
  });

  // Sidebar Menu
  $(".ctg-sidebar-menu li").click(function(){
    // preventDefault();
    $(".ctg-sidebar-menu li").toggleClass("active");
  });

  // Fixed Header
  /* ----------------------------------------------------------- */
      /*  Fixed header
      /* ----------------------------------------------------------- */
  
      $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
          $('#header').addClass('menu_fixed');
        } else {
          $('#header').removeClass('menu_fixed');
        }
      });
    
  

})(jQuery);