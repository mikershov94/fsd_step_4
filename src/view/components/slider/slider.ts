import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    constructor(props: any) {
        super(props);
    }

    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}

export default Slider;