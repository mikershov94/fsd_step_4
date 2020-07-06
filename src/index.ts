/// <reference path="index.d.ts" />

import SliderModel from './model';
import SliderController from './controller';
import SliderView from './view';

(function($) {

    $.fn.fsdSlider = function() {

        const model = new SliderModel();
        const view = new SliderView();
        const controller = new SliderController(model, view);
        controller.runPlugin();

        return this;
    }

})(jQuery)