import $ from 'jquery';

class SliderView {
    public plugin: any;
    public wrapper: any;
    public rail: any;
    public slider: any;

    constructor() {
        this.plugin = $(document).find('#fsd-slider');

    }

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

    render(position: number = 50): void {
        $('<div>',  {
                class: 'wrapper',
                append: $('<div>', {
                                class: 'rail',
                                append: $('<div>', {
                                                class: 'slider',
                                })
                        .attr('data-position', position)
                })
        }).appendTo(this.plugin);

        this.wrapper = $('.wrapper');
        this.rail = $('.rail');
        this.slider = $('.slider');
    }
}

export default SliderView;