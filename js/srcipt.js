$(function () {
  'use strict';
  // sticky manu
  $(window).scroll(function () {
    var navOff = $(window).scrollTop();
    if (navOff > 200) {
      $(".main_manu").addClass("sticky");
    } else {
      $(".main_manu").removeClass("sticky");
    }
  });
  // slick slider
  $('#banner_area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // testymonial
  $('.tests_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [  {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // About videos js
  $('.venobox').venobox();


  // counter up js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // clint slider js
  $('.clint_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, ]

  });


});

// team slider js 
$('.team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});