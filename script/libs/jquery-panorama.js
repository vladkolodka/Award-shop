(function($) {
    $.fn.panorama = function(ImageWidth) {

        var panorama = this.first().parent();
        var wrapper = $("<div></div>");

        panorama.append(wrapper);
        panorama.width(ImageWidth);

        this.each(function (index, element) {
            var jElement = $(element);

            wrapper.append(jElement);
        });
        this.first().load(function () {
            var count = Math.ceil(ImageWidth / this.width);
            for(var i = 0; i < count; i++){
                wrapper.append($(this).clone());
            }
            animate(this.width*-1);
        });
        function animate(width){
            wrapper.animate({marginLeft: width}, 32000, "linear", function () {
                wrapper.css({marginLeft: 0});
                animate(width);
            });
        }
    };
})(jQuery);