import $ from 'jquery';
import Component from '../index';

class Container extends Component {

    constructor() {
        super();
    }

    protected setTemplate(): string {
        return '<div class="container"></div>'
    }

}

export default Container;