import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    constructor() {
        super();
        this.element = $(`<div class="slider"></div>`);
    }

}

export default Slider;