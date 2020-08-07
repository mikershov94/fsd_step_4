import $ from 'jquery';

import Component from '../index';

class Wrapper extends Component {

    constructor(props: any) {
        super(props);
        this.nameComponent = 'wrapper';
    }

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;