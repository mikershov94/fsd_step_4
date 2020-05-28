import $ from 'jquery';

class SliderView {

    render(position: number) {
        $('#fsd-slider').append(`<div class="wrapper">` +
                                    `<div class="rail">` +
                                        `<div class="slider" data-position=${position}></div>` +
                                    `</div>` +
                                `</div>`);
    }
}

export default SliderView;