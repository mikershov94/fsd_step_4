import $ from 'jquery';

class SliderView {
    private wrapper: any;

    constructor() {
        this.wrapper = $('#fsd-slider');
    }
    
    updatePosition(newPosition: number) {
        this.wrapper.find('.slider').attr('data-position', newPosition);
    }

    render(position: number) {
        
        this.wrapper.append(`<div class="wrapper">` +
                                    `<div class="rail">` +
                                        `<div class="slider" data-position=${position}></div>` +
                                    `</div>` +
                                `</div>`);
    }
}

export default SliderView;