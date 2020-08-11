import $ from 'jquery';

import Component from '../index';

class ProgressBar extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }
}

export default ProgressBar;