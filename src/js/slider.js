$(document).ready(function () {
    $('.reviews').slick({
        arrows: false,
        dots: true,
        speed: 250,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // inffinite: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        draggable: true,
        swipe: true,
        touchTreshhold: 3,
        touchMove: false,


    });
});