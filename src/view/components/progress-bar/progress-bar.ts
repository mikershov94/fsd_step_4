import $ from 'jquery';

import Component from '../index';

class ProgressBar extends Component {

    mount(): JQuery {
        return $('<div class="progress-bar></div>');
    }

}

export default ProgressBar;