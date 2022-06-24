$(document).ready(function () {

    $('.exp').on('mouseover', function () {
        $(this).find('p').css('color', '#fff');
        $(this).find('img').animate({ 'width': '100px' }, 150);
    })

    $('.exp').on('mouseleave', function () {
        $(this).find('p').css('color', '#28292d');
        $(this).find('img').animate({ 'width': '80px' }, 150);
    })

    //tooltips
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    $('.perfil').on('click', function () {
        $('.dropdown').show(125);
    });
    $('.dropdown').on('mouseleave', function () {
        $(this).hide(125);
    });

});