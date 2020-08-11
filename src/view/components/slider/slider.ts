import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}

export default Slider;