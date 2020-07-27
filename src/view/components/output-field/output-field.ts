import $ from 'jquery';

import Component from '../index';

class OutputField extends Component {

    constructor(pos: number = 250) {
        super();
        this.element = $(`<input value="${pos}" />`)
    }

}

export default OutputField;