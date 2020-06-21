
class SliderView {
    public plugin: JQuery;
    public wrapper: JQuery;
    public rail: JQuery;
    public slider: JQuery;

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
        this.wrapper = $('<div class="wrapper"></div>').appendTo(this.plugin);
        this.rail = $('<div class="rail"></div>').appendTo(this.wrapper);
        this.slider = $(`<div class="slider" data-position="${position}"></div>`).appendTo(this.rail);
    }
}

export default SliderView;