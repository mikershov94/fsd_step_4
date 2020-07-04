import $ from 'jquery'

import rail from './components/rail';
import slider from './components/slider';


class SliderView {
        
    public plugin: JQuery;
    public container: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;

    constructor() {
        this.plugin = $(document).find('#fsd-slider');
        this.container = $('<div class="container"></div>');
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

    render(position: number = 50): JQuery {
        this.container.appendTo('#fsd-slider');
        this.wrapper.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.slider);
        return this.plugin;
    }
}
export default SliderView;