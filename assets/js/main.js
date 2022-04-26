"use strict";

(function ($) {
  "use strict";

  //  Slider slider
    $('.hero-slider').owlCarousel({
      items: 1,
      margin: 20,
      loop: true,
      autoplay: true,
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
      // autoplayTimeout: 3000,
      //  autoplaySpeed: 3000, 
  });


})(jQuery);