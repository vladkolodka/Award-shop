(function($) {
    $.fn.panorama = function(ImageWidth, ScrollSpeed) {

        var panorama = this.first();
        var wrapper = $("<div>");
        var images = panorama.find("img");

        panorama.width(ImageWidth);
        panorama.append(wrapper);
        wrapper.append(images);

        images.load(function () {
            var count = Math.ceil(ImageWidth / this.width);
            for(var i = 0; i < count; i++){
                wrapper.append(images.clone());
            }
            animate(this.width *-1);
        });

        function animate(width){
            wrapper.animate({marginLeft: width}, ScrollSpeed, "linear", function () {
                wrapper.css({marginLeft: 0});
                animate(width);
            });
        }
    };
})(jQuery);