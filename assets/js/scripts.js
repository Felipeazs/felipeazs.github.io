$(document).ready(function () {

    let counterContainer = document.querySelector(".website-counter");
    let visitCount = localStorage.getItem("page_view");

    if (visitCount) {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
    } else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }
    counterContainer.innerHTML = visitCount;

    $('.exp').on('mouseover', function () {
        $(this).find('p').css('color', '#E7E7E7');
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