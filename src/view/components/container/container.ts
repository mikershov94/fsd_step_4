import $ from 'jquery';
import Component from '../index';

class Container extends Component {

    constructor(props: any) {
        super(props);
        this.nameComponent = 'container';
    }

    protected setTemplate(): string {
        return '<div class="container></div>'
    }

}

export default Container;