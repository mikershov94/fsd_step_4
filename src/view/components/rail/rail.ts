import $ from 'jquery';

import Component from '../index';

class Rail extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return '<div class="rail"></div>';
    }

}

export default Rail;