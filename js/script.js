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
  //Cache tous le contenu des collapsibles
$('.accordeon > div').hide();
  //Affiche le premier 
$('#theme').show();
  //sur le click
$('.accordeon h3').on('click', function () {
    //CLASS CHANGE OF +/-

    // if (variable.hasClass("fa-minus")){
    //   variable.addClass("fa-plus")
    // }else if(variable.hasClass("fa-plus")){
    //   variable.addClass("fa-minus")
    // }


    // if(var2.hasClass("fa-minus")){
    //   var2.addClass("fa-plus")
    // }else if(var2.hasClass("fa-plus")){
    //   var2.addClass("fa-minus")
    // }

    //On définit parent = .accordeon
    let parent = $(this).parent();
    //On enlève le fa-minus de tous les i et on remplace par fa-plus
    parent.find("i").removeClass("fa-minus").addClass("fa-plus");
    $(this).children("i").toggleClass("fa-plus fa-minus")
    if($(this).next().is(":hidden")){
      $(this).next().slideToggle(200).siblings('div').slideUp(200);      
    }   

    
    //COLLAPSIBLE 
    
    //fermeture automatique
    //.siblings('div').slideUp(200);
});


// $('.accordeon h3').on('click', function () {
//   $(this).next().slideToggle(200).siblings('div').slideUp(200);
  
// }


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
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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



