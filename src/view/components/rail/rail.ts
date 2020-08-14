import $ from 'jquery';

import Component from '../index';

class Rail extends Component {

    constructor(props: TMessage) {
        super(props);
    }

    protected setTemplate(): string {
        return '<div class="rail"></div>';
    }

}

export default Rail;