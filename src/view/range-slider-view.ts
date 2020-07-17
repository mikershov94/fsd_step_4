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
    public output: JQuery;
    public outputFieldA: JQuery;
    public outputFieldB: JQuery;
/*
    public callbackDown: IDownHandler;
    public callbackMove: IMoveHandler;
    public callbackUp: IUpHandler;
*/
    constructor(rootElement: JQuery) {
        this.plugin = rootElement;
        this.container = $('<div class="container"></div>');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.sliderA = slider();
        this.sliderB = slider();
        this.output = $('<div class="wrapper"></div>');
        this.outputFieldA = outputField();
        this.outputFieldB = outputField();

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

    render(defaultPosA: number, defaultPosB: number): JQuery {
        this.container.appendTo(this.plugin);
        this.wrapper.appendTo(this.container);
        this.output.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.sliderA);
        this.setADefaultPosition(defaultPosA);
        this.wrapper.append(this.sliderB);
        this.setBDefaultPosition(defaultPosB);
        this.output.append(this.outputFieldA);
        this.outputFieldA.val(defaultPosA);
        this.output.append(this.outputFieldB);
        this.outputFieldB.val(defaultPosB);
        return this.plugin;
    }
}

export default RangeSliderView;