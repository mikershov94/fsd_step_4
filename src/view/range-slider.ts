/// <reference path="view.d.ts" />

import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';
import outputField from './components/output-field';

class RangeSliderView implements IRangeSliderView {

    public plugin: JQuery;
    public container: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public sliderBefore: JQuery;
    public sliderAfter: JQuery;
    public outputFieldBefore: JQuery;
    public outputFieldAfter: JQuery;
/*
    public callbackDown: IDownHandler;
    public callbackMove: IMoveHandler;
    public callbackUp: IUpHandler;
*/
    constructor() {
        this.plugin = $(document).find('#fsd-slider');
        this.container = $('<div class="container"></div>');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.sliderBefore = slider();
        this.sliderAfter = slider();
        this.outputFieldBefore = outputField();
        this.outputFieldAfter = outputField();

    }

    initObserver(): void {
        console.log('инит обсервер');
    }

    render(): void {
        console.log('рендер')
    }
}

export default RangeSliderView;