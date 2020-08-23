/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="index.d.ts" />

import { AloneSliderModel, RangeSliderModel } from './model';
import { Controller } from './controller';
import { AloneSliderView, RangeSliderView } from './view';

import './main.sass';

(function($) {

    $.fn.fsdSlider = function(options: object) {

        const config: IConfigPlugin = $.extend({

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

            let model:      IModel;
            let view:       IView;
            let controller: IController;

            if (config.rangeSlider) {
                let defaultState: IRangeModelState = {
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultPositionA: config.defaultPositionA,
                    defaultPositionB: config.defaultPositionB,
                };

                model = new RangeSliderModel(defaultState);
                view = new RangeSliderView($(this));
                controller = new Controller(model, view);
            } else {
                let defaultState: IAloneModelState = {
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    defaultPosition: config.defaultPosition
                };

                model = new AloneSliderModel(defaultState);
                view = new AloneSliderView($(this));
                controller = new Controller(model, view);

            }

            controller.init();
        })

    }

})(jQuery)