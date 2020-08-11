import $ from 'jquery';

import Component from '../index';

class Wrapper extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;