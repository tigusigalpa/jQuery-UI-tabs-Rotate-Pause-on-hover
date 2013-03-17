;(function($) {
    $.extend( $.ui.tabs.prototype, {
        hover: function(hoverOn, hoverOff) {
            var self = this;
            if(hoverOn) {
                self.element.hover(
                    function() {
                        $(this).tabs("pause");
                    },
                    function() {
                        if(hoverOff) $(this).tabs("unpause");
                    }
                );
            }
        }
    });
})(jQuery);