/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="index.d.ts" />

import { AloneSliderModel, RangeSliderModel } from './model';
import { AloneSliderController, RangeSliderController } from './controller';
import { AloneSliderView, RangeSliderView } from './view';

(function($) {

    $.fn.fsdSlider = function(options: object) {

        const config = $.extend({

            min: 0,
            max: 500,
            step: 1,
            defaultPosition: 250,
            defaultPositionA: 125,
            defaultPositionB: 375,
            rangeSlider: false,
            verticalView: false,
            discreteScale: false,
            round: 0

        }, options)
        
        return this.each(function() {

            let model;
            let view;
            let controller;

            if (config.rangeSlider) {
                model = new RangeSliderModel();
                view = new RangeSliderView($(this));
                controller = new RangeSliderController(model, view);
            } else {
                model = new AloneSliderModel();
                view = new AloneSliderView($(this));
                controller = new AloneSliderController(model, view);
            }

            controller.runPlugin(config);
        })

    }

})(jQuery)