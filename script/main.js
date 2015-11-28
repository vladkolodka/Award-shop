$(function () {
<<<<<<< HEAD
    $(".panorama").panorama(100000);
=======
    $(".panorama").panorama(70000);
>>>>>>> 3c9a3d791a6b7873df75c94ceb17126021028536

    // анимация header>h1,h3
    var headers = $("header h1,h3");
    window.setTimeout(function () {
        headers.removeClass("scale1");
    }, 200);
});

/*global Sly, console */
jQuery(function ($) {
    'use strict';

    var options = {
        scrollBy: 200,
        speed: 200,
        easing: 'easeOutQuart',
        scrollBar: '#scrollbar',
        dynamicHandle: 1,
        dragHandle: 1,
        clickBar: 1,
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1
    };
    var frame = new Sly('#frame', options);

    // Initiate frame
    frame.init();

    // Reload on resize
    $(window).on('resize', function () {
        frame.reload();
    });
});