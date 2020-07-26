import $ from 'jquery';

import Component from '../index';

class Wrapper extends Component {

    constructor() {
        super();
        this.element = $('<div class="wrapper"></div>');
    }

}

export default Wrapper;