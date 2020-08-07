import $ from 'jquery';

import Component from '../index';

class ProgressBar extends Component {

    constructor(props: any) {
        super(props);
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }
}

export default ProgressBar;