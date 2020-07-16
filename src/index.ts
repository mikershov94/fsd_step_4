/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="index.d.ts" />

import SliderModel from './model';
import SliderController from './controller';
import { AloneSliderView, RangeSliderView } from './view';

(function($) {

    $.fn.fsdSlider = function(options: object) {

        const config = $.extend({

            min: 0,
            max: 500,
            step: 1,
            defaultPosition: 250,
            rangeSlider: false,
            verticalView: false,
            discreteScale: false,
            round: 0

        }, options)
        
        return this.each(function() {

            let view;

            if (config.rangeSlider) {
                view = new RangeSliderView();
            } else {
                view = new AloneSliderView();
            }
            const model = new SliderModel();
            const controller = new SliderController(model, view);

            controller.runPlugin();
        })

    }

})(jQuery)