var defaultOptions;
(function ($) {
    $.fn.blink = function (options) {
        defaultOptions = {
            'activeCssClass': 'control-blink'
        };
        var $this = $(this);
        if (options) {
            defaultOptions.activeCssClass = options.activeCssClass;
        } else {
            options = defaultOptions;
        }

        if ($(this).attr("intervalId")) {
            clearInterval($(this).attr("intervalId"));
        }

        var intervalId = setInterval(function startBlinking() {
            if ($this.hasClass(options.activeCssClass)) {
                $this.removeClass(options.activeCssClass);
            } else {
                $this.addClass(options.activeCssClass);
            }
        }, 750);
        $(this).attr("intervalId", intervalId);
        $(this).attr("blinkCssClass", options.activeCssClass);
    };

    $.fn.stopBlinking = function () {
        clearInterval($(this).attr("intervalId"));
        var blinkCssClass = $(this).attr("blinkCssClass");
        if (blinkCssClass) {
            $(this).removeClass(blinkCssClass);
        }
    };
})(jQuery);