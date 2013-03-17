/**
 * jQuery UI Tabs Rotate Pause on Hover v1.0
 * https://github.com/tigusigalpa/jQuery-UI-tabs-Rotate-Pause-on-hover
 * MIT licensed
 *
 * Copyright (C) 2013 lenslider.com - A weekend project by Igor Sazonov (@tigusigalpa)
 */ 

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