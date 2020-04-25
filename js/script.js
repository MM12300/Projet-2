$(function () {
       
//Sticky menu on top
$(window).scroll(function () {
    //Variable scroll position
    var scroll = $(window).scrollTop();
    //Variable position du haut de la section à propos
    var header = document.querySelector(".accordeon").offsetTop
    //Adds fixed class to the navbar
    if (scroll >= header) {
        $("#menu").addClass("fixed");
    } else {
        $("#menu").removeClass("fixed");
    }
});


// Accordeon
$('.accordeon > div').hide();
$('#theme').show();
$('.accordeon h3').on('click', function () {
    $(this).addClass('actif').siblings('h3').removeClass('actif');        
    $(this).next().slideToggle(200).siblings('div').slideUp(200);
});

// Fancybox
$('[data-fancybox="gallery"]').fancybox({
    loop:true,
    arrows: true,
    buttons: [
        //"zoom",
        "share",
        //"slideShow",
        //"fullScreen",
        //"download",
        "thumbs",
        "close"
      ],
      //   false
      //   "zoom"
      //   "fade"
      //   "zoom-in-out"
      animationEffect: "zoom-in-out",
      //   "fade'
      //   "slide'
      //   "circular'
      //   "tube'
      //   "zoom-in-out'
      //   "rotate'
      transitionEffect: "circular"
});

    //slick
    $('.slick').slick({
      arrows:true,
      autoplay:true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows:true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows:true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:true,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

});



