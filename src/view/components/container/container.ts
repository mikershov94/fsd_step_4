import $ from 'jquery';
import Component from '../index';

class Container extends Component {

    constructor() {
        super();
        this.element = $('<div class="container"></div>');
    }

}

export default Container;