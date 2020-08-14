import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    constructor(props: TMessage) {
        super(props);
    }

    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}

export default Slider;