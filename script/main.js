$(function () {
    $(".panorama").panorama(1440, 70000);

    // анимация header>h1
    var header = $("header h1,h3");
    animateHeader(header);
    window.setTimeout(function () {
        header.removeClass("scale1");
    }, 200);
    function animateHeader(header){


    }
});
