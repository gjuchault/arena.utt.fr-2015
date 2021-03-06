'use strict';

$('#scrollMenuTop img').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000, 'easeOutExpo');
});

$('a[href^="#"]').click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href'));
    if ($target.length === 0) { return; }

    $('#real-menu').slideUp(function () {
        $(window).trigger('resize').trigger('scroll');
    });

    $('html, body').animate({
        scrollTop: $target.offset().top - 30
    }, 2000, 'easeOutExpo');

    return false;
});
