import $ from 'jquery';

import Component from '../index';

class ProgressBar extends Component {

    constructor() {
        super();
        this.element = $('<div class="progress-bar"></div>')
    }

}

export default ProgressBar;