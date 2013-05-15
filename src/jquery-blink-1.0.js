var defaultOptions;
(function ($) {
    $.fn.blink = function (options) {
        defaultOptions = {
            'activeCssClass': 'control-blink',
            interval: 750
        };
        var $this = $(this);
        if (options) {
            defaultOptions.activeCssClass = options.activeCssClass;
            defaultOptions.interval = options.interval;
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
        }, options.interval);
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