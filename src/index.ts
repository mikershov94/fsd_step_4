/// <reference path='./index.d.ts' />

import { AloneSliderModel, RangeSliderModel } from './model';
import { AloneSliderController, RangeSliderController } from './controller';
import { AloneSliderView, RangeSliderView } from './view';

import './main.sass';

(function($) {

    $.fn.fsdSlider = function(options: object) {

        const config: IConfigPlugin = $.extend({

            min: 0,
            max: 500,
            step: 1,
            defaultValue: 250,
            defaultPositionA: 125,
            defaultPositionB: 375,
            rangeSlider: false,
            verticalView: false,
            discreteScale: false,
            round: 0

        }, options)
        
        return this.each(function() {

            let model:      ISliderModel;
            let view:       IView;
            let controller: IController;

            if (config.rangeSlider) {
                let defaultState: TState = {
                    vertical: config.verticalView,
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultPositionA: config.defaultPositionA,
                    defaultPositionB: config.defaultPositionB,
                };

                model = new RangeSliderModel(defaultState);
                view = new RangeSliderView($(this));
                controller = new RangeSliderController(model, view);
            } else {
                let defaultState: TState = {
                    vertical: config.verticalView,
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultValue: config.defaultValue
                };

                model = new AloneSliderModel(defaultState);
                view = new AloneSliderView($(this));
                controller = new AloneSliderController(model, view);

            }

            controller.init();
        })

    }

})(jQuery)