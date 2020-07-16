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
    public sliderA: JQuery;
    public sliderB: JQuery;
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
        this.sliderA = slider();
        this.sliderB = slider();
        this.outputFieldBefore = outputField();
        this.outputFieldAfter = outputField();

    }

    private setADefaultPosition(value: number): void {
        this.sliderA.css('left', `${value}px`);
    }

    private setBDefaultPosition(value: number): void {
        this.sliderB.css('left', `${value}px`);
    }

    initObserver(): void {
        console.log('инит обсервер');
    }

    render(): JQuery {
        this.container.appendTo('#fsd-slider');
        this.wrapper.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.sliderA);
        this.setADefaultPosition(125);
        this.wrapper.append(this.sliderB);
        this.setBDefaultPosition(375);
        return this.plugin;
    }
}

export default RangeSliderView;