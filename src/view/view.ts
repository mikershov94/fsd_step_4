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
        this.rail = rail();
        this.slider = slider();

    }
/*
    subscribeOnMouseDown(callback: any): void {
        this.slider.on('mousedown', callback);
    }

    subscribeOnMouseMove(callback: any): void {
        $(document).on('mousemove', callback)
    }
    
    subscribeOnMouseUp(callback: any): void {
        $(document).on('mouseup', callback);
    }

    unsubscribeFromMouseMove(callback: any): void {
        $(document).unbind('mousemove', callback);
    }

    getRailPosition(): void {
        console.log('')
    }

    getSliderPosition(): void {
        console.log('')
    }
    
    updatePosition(newPosition: number) {
        this.wrapper.find('.slider').attr('data-position', newPosition);
    }
    */
    render(position: number = 50): JQuery {
        this.wrapper = $('<div class="wrapper"></div>').appendTo('#fsd-slider');
        this.rail.appendTo(this.wrapper);
        this.slider.appendTo(this.rail);
        return this.plugin;
    }
}

export default SliderView;