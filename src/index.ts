/// <reference path='./index.d.ts' />

import { AloneSliderModel, RangeSliderModel } from './model';
import { AloneSliderController, RangeSliderController } from './controller';
import { AloneView,
         AloneVerticalView,
         RangeView,
         RangeVerticalView } from './view';

import './main.sass';

(function($) {

    $.fn.fsdSlider = function(options: object) {

        const config: IConfigPlugin = $.extend({

            min: 0,
            max: 500,
            step: 1,
            defaultValue: 250,
            defaultValueA: 125,
            defaultValueB: 375,
            rangeSlider: false,
            verticalView: false,
            discreteScale: false,
            round: 0

        }, options)
        
        return this.each(function() {

            let view:       IView;
            let controller: IController;

            if (config.rangeSlider) {
                let defaultState: TState = {
                    vertical: config.verticalView,
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultValueA: config.defaultValueA,
                    defaultValueB: config.defaultValueB,
                };

                let model: IRangeSliderModel = new RangeSliderModel(defaultState);
                view = config.verticalView ? new RangeVerticalView($(this)) : new RangeView($(this));
                controller = new RangeSliderController(model, view);
            } else {
                let defaultState: TState = {
                    vertical: config.verticalView,
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultValue: config.defaultValue
                };

                let model: IAloneSliderModel = new AloneSliderModel(defaultState);
                view = config.verticalView ? new AloneVerticalView($(this)) : new AloneView($(this));
                controller = new AloneSliderController(model, view);

            }

            controller.init();
        })

    }

})(jQuery)