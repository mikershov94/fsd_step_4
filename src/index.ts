/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="index.d.ts" />

import { AloneSliderModel, RangeSliderModel } from './model';
import { AloneSliderController, RangeSliderController } from './controller';
import { AloneSliderView, RangeSliderView } from './view';

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

            let model: IAloneSliderModel | IRangeSliderModel;
            let view: IAloneSliderView | IRangeSliderView;
            let controller: IAloneSliderController | IRangeSliderController;

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