import $ from 'jquery';
import Component from '../index';

class Container extends Component {

    constructor(props: any) {
        super(props);
    }

    protected setTemplate(): string {
        return '<div class="container></div>'
    }

}

export default Container;