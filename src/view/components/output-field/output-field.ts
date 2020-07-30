import $ from 'jquery';

import Component from '../index';

class OutputField extends Component {

    mount(): JQuery {
        return $('<input class="output-field" value="250" />')
    }

}

export default OutputField;