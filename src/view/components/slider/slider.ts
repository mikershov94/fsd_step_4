import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    mount(): JQuery {
        return $('<div class="slider"></div>')
    }
}

export default Slider;