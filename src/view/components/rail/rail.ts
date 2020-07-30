import $ from 'jquery';

import Component from '../index';

class Rail extends Component {

    mount(): JQuery {
        return $('<div class="rail"></div>');
    }

}

export default Rail;