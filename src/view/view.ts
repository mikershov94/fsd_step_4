/// <reference path="view.d.ts" />

import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';
import outputField from './components/output-field';


class SliderView implements ISliderView {
        
    public plugin: JQuery;
    public container: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;
    public outputField: JQuery;

    public callbackDown: (e: JQuery.MouseDownEvent) => void;
    public callbackMove: void;
    public callbackUp: void;

    constructor() {
        this.plugin = $(document).find('#fsd-slider');
        this.container = $('<div class="container"></div>');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.slider = slider();
        this.outputField = outputField();

    }

    moveSlider(pageX: number, minLimit: number, maxLimit: number): number {
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.slider.outerWidth();
        
        let left = pageX - offsetWidth / 2 - offset;
        if (left < minLimit) left = minLimit;
        if (left > maxLimit) left = maxLimit;

        this.slider.css('left', `${left}px`);
        return left;
    }

    initObserver(callbackDown: (e: JQuery.MouseDownEvent) => void): void {
        
        this.callbackDown = callbackDown;
        /*
        this.callbackMove = callbackMove;
        this.callbackUp = callbackUp;
*/
        this.slider.on('mousedown', this.callbackDown);
    }
/*
    subscribeOnMouseMove(): void {
        $(document).on('mousemove', this.callbackMove);
    }

    subscribeOnMouseUp(): void {
        $(document).on('mouseup', this.callbackUp);
    }

    unsubscribeMouseMove(): void {
        $(document).unbind('mousemove');
    }
*/
    render(): JQuery {
        this.container.appendTo('#fsd-slider');
        this.wrapper.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.slider);
        this.container.append(this.outputField);
        return this.plugin;
    }
}
export default SliderView;