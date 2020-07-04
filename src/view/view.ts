import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';


class SliderView {
        
    public plugin: JQuery;
    public container: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;

    public callbackDown: VoidFunction;
    public callbackMove: VoidFunction;
    public callbackUp: VoidFunction;

    constructor() {
        this.plugin = $(document).find('#fsd-slider');
        this.container = $('<div class="container"></div>');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.slider = slider();

    }

    moveSlider(pageX: number): number {
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.slider.outerWidth();
        const wrapperWidth = this.wrapper.outerWidth();

        let left = pageX - offsetWidth / 2 - offset;

        if (left < 0) left = 0
        if (left > wrapperWidth) left = wrapperWidth - offsetWidth;

        this.slider.css('left', `${left}px`);
        return left;
    }

    initObserver(
                    callbackDown: VoidFunction,
                    callbackMove: VoidFunction,
                    callbackUp: VoidFunction
                    ): void {
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
        $(document).unbind('mousemove');
    }

    render(position: number = 50): JQuery {
        this.container.appendTo('#fsd-slider');
        this.wrapper.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.slider);
        return this.plugin;
    }
}
export default SliderView;