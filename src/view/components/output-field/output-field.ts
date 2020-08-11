import $ from 'jquery';

import Component from '../index';

class OutputField extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return `<input class="output-field" value=${500} />`
    }

}

export default OutputField;