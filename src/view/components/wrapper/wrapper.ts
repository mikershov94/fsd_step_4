import $ from 'jquery';

import Component from '../index';

class Wrapper extends Component {

    mount(): JQuery {
        return $('<div class="wrapper"></div>')
    }

}

export default Wrapper;