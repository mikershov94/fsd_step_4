import $ from 'jquery';

class SliderView {
    public document: any;
    public wrapper: any;
    public rail: any;
    public slider: any;

    public oldSliderPosition: number;

    constructor() {
        this.document = $(document);
        this.wrapper = $('#fsd-slider');
        this.rail = this.wrapper.find('.rail')
        this.slider = this.wrapper.find('.slider');

    }

    bindHandlerDown(callback: any): void {
        this.slider.on('mousedown', callback);
    }

    bindHandlerMove(callback: any): void {
        this.document.bind('mousemove', callback)
    }
    
    unbindHandlerUp(): void {
        this.document.on('mouseup', () => {
            this.document.unbind('mousemove')
        });
    }

    getRailPosition() {
        console.log('')
    }

    getSliderPosition() {
        console.log('')
    }
    
    updatePosition(newPosition: number) {
        this.wrapper.find('.slider').attr('data-position', newPosition);
    }

    render(position: number): void {
        
        this.wrapper.append(`<div class="wrapper">` +
                                    `<div class="rail">` +
                                        `<div class="slider" data-position=${position}></div>` +
                                    `</div>` +
                                `</div>`);
    }
}

export default SliderView;