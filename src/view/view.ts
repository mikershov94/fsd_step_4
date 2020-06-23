import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';

class SliderView {
    
    public plugin: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;

    constructor() {
        this.plugin = $(document).find('#fsd-slider');
        this.wrapper = $('<div class="wrapper"></div>');
        this.rail = rail();
        this.slider = slider();

    }

    subscribeOnMouseDown(callback: VoidFunction): void {
        this.slider.on('mousedown', callback);
    }

    subscribeOnMouseMove(callback: VoidFunction): void {
        $(document).on('mousemove', callback)
    }
    
    subscribeOnMouseUp(callback: VoidFunction): void {
        $(document).on('mouseup', callback);
    }

    unsubscribeFromMouseMove(callback: VoidFunction): void {
        $(document).unbind('mousemove', callback);
    }
    getRailPosition(): number {
        return this.rail[0].getBoundingClientRect().left;
    }

    getSliderPosition(): number {
        return this.slider[0].getBoundingClientRect().left;
    }

    render(position: number = 50): JQuery {
        this.wrapper.appendTo('#fsd-slider');
        this.rail.appendTo(this.wrapper);
        this.slider.appendTo(this.rail);
        return this.plugin;
    }
}

export default SliderView;