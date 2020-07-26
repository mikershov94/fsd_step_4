import $ from 'jquery';

class Slider {
    
    private element: JQuery;

    constructor() {
        this.element = $(`<div class="slider"></div>`);
    }

    mount(): JQuery {
        return this.element;
    }

}

export default Slider;