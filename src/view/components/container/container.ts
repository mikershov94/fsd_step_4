import $ from 'jquery';
import Component from '../index';

class Container extends Component {

    mount(): JQuery {
        return $('<div class="container"></div>');
    }

}

export default Container;