import $ from 'jquery';

import Component from '../index';

class Rail extends Component {

    constructor() {
        super();
        this.element = $('<div class="rail"></div>')
    }

}

export default Rail;