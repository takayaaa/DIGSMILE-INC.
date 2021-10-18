
$(function () {
    $(".drawer-icon").on("click", function () {
        $(".drawer-icon").toggleClass("is-active");
        $(".drawer-content").toggleClass("is-active");
        $(".drawer-background").toggleClass("is-active");

    });
});

$('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
});

$(".drawer-content__item  a").on("click", function () {

    // $(".drawer-content__items").slideToggle();
    $(".drawer-icon").toggleClass("is-active");
    $(".drawer-content").toggleClass("is-active");
    $(".drawer-background").toggleClass("is-active");

});
jQuery(window).on('scroll', function () {
    　if (600 < jQuery(this).scrollTop()) {
    　　jQuery('.header_inner').addClass('header_charge_color');
    　} else {
    　　jQuery('.header_inner').removeClass('header_charge_color');
    　}
    });

    AOS.init({
        offset: 200,
        duration: 3000,
        easing: 'ease',
        delay: 300,
        once: false,
    });    
