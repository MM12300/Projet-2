$(function () {
    
    
    // Accordeon
    $('.accordeon > div').hide();
    $('.accordeon h3').on('click', function () {
        $(this).addClass('actif').siblings('h3').removeClass('actif');        
        $(this).next().slideToggle(200).siblings('div').slideUp(200);

    });


});