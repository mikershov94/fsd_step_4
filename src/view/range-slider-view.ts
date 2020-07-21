/// <reference path="view.d.ts" />

import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';
import outputField from './components/output-field';
import filling from './components/filling';

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
    public filling: JQuery;

    public callbackDownA: IDownHandler;
    public callbackDownB: IDownHandler;
    public callbackMoveA: IMoveHandler;
    public callbackMoveB: IMoveHandler;
    public callbackUp: IUpHandler;

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
        this.filling = filling();

    }

    private setADefaultPosition(value: number): void {
        this.sliderA.css('left', `${value}px`);
    }

    private setBDefaultPosition(value: number): void {
        this.sliderB.css('left', `${value}px`);
    }

    moveSliderA(pageX: number, min: number, posB: number): number {
        console.log(`${pageX}  ${min}  ${posB}`);
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.sliderA.outerWidth();
        
        let left = pageX - offsetWidth / 2 - offset;
        if (left < min) left = min;
        if (left > posB) left = posB;

        this.sliderA.css('left', `${left}px`);
        return left;
    }

    moveSliderB(pageX: number, max: number, posA: number): number {
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.sliderB.outerWidth();

        let left = pageX - offsetWidth / 2 - offset;
        if (left < posA) left = posA;
        if (left > max) left = max;

        this.sliderB.css('left', `${left}px`);
        return left;
    }

    moveFillA(posA: number, posB: number): void {
        this.filling.css('left', `${posA}px`);
        const width = posB - posA;
        this.filling.css('width', `${width}px`);     
    }

    moveFillB(posA: number, posB: number): void {
        const width = posB - posA;
        this.filling.css('width', `${width}px`);
    }

    initObserver(callbackDownA: IDownHandler,
                 callbackDownB: IDownHandler, 
                 callbackMoveA: IMoveHandler,
                 callbackMoveB: IMoveHandler,
                 callbackUp: IUpHandler): void {
        
        this.callbackDownA = callbackDownA;
        this.callbackDownB = callbackDownB;
        this.callbackMoveA = callbackMoveA;
        this.callbackMoveB = callbackMoveB;
        this.callbackUp = callbackUp;

        this.sliderA.on('mousedown', this.callbackDownA);
        this.sliderB.on('mousedown', this.callbackDownB);
    }

    subscribeOnMoveA(): void {
        $(document).on('mousemove', this.callbackMoveA);
    }

    subscribeOnMoveB(): void {
        $(document).on('mousemove', this.callbackMoveB);
    }

    subscribeOnMouseUp(): void {
        $(document).on('mouseup', this.callbackUp);
    }

    unsubscribeMouseMove(): void {
        $(document).off('mousemove');
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
        this.wrapper.append(this.filling);
        this.moveFillA(defaultPosA, defaultPosB);
        this.moveFillB(defaultPosA, defaultPosB);
        this.output.append(this.outputFieldA);
        this.outputFieldA.val(defaultPosA);
        this.output.append(this.outputFieldB);
        this.outputFieldB.val(defaultPosB);
        return this.plugin;
    }
}

export default RangeSliderView;