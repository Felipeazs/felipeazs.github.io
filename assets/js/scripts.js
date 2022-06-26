$(document).ready(function () {

    $('.exp').on('mouseover', function () {
        $(this).find('p').css('color', '#fff');
        $(this).find('img').animate({ 'width': '100px' }, 150);
    })

    $('.exp').on('mouseleave', function () {
        $(this).find('p').css('color', '#28292d');
        $(this).find('img').animate({ 'width': '80px' }, 150);
    })

    $('.perfil').hover(function () {
        $('.dropdown').show(200);
    });
});