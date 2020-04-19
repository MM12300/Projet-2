$(function () {
    // Menu mobile
    $('#menu-mobile > ul').hide();
    $('#menu-mobile .btn-bars').on('click', function () {
        $('#menu-mobile > ul').slideToggle(200);
    });

        // Ajouter class au scroll (fixer le menu)
var position = $('#menu').position();
$('.info').text(position.top);


$(window).scroll(function () {
           var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#menu").addClass("fixed");
    } else {
        $("#menu").removeClass("fixed");
    }
});


// Accordeon
$('.accordeon > div').hide();
$('.accordeon h3').on('click', function () {
    $(this).addClass('actif').siblings('h3').removeClass('actif');        
    $(this).next().slideToggle(200).siblings('div').slideUp(200);

});

});



