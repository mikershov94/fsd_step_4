/// <reference path="view.d.ts" />

import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';
import outputField from './components/output-field';


class AloneSliderView implements ISliderView {
        
    public plugin: JQuery;
    public container: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;
    public outputField: JQuery;

    public callbackDown: IDownHandler;
    public callbackMove: IMoveHandler;
    public callbackUp: IUpHandler;

    constructor(rootElement: JQuery) {
        this.plugin = rootElement;
        this.container = $('<div class="container"></div>');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.slider = slider();
        this.outputField = outputField();

    }

    private setSliderDefaultPosition(value: number): void {
        this.slider.css('left', `${value}px`);
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

    initObserver(callbackDown: IDownHandler,
                 callbackMove: IMoveHandler,
                 callbackUp: IUpHandler): void {
        
        this.callbackDown = callbackDown;
        this.callbackMove = callbackMove;
        this.callbackUp = callbackUp;

        this.slider.on('mousedown', this.callbackDown);
    }

    subscribeOnMouseMove(): void {
        $(document).on('mousemove', this.callbackMove);
    }

    subscribeOnMouseUp(): void {
        $(document).on('mouseup', this.callbackUp);
    }

    unsubscribeMouseMove(): void {
        $(document).off('mousemove');
    }
    
    render(defaultPosition: number): JQuery {
        this.container.appendTo(this.plugin);
        this.wrapper.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.slider);
        this.setSliderDefaultPosition(defaultPosition);
        this.container.append(this.outputField);
        this.outputField.val(defaultPosition);
        return this.plugin;
    }
}
export default AloneSliderView;