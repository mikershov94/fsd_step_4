interface JQuery {
    fsdSlider(): void    
}

(function($) {

    $.fn.fsdSlider = function() {
        console.log('плагин подключен и робит')
    }

})(jQuery)