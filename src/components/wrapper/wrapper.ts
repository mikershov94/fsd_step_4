import $ from 'jquery';

import Component from '../index';

interface TWrapperState extends TState {
    offset: number;
}

class Wrapper extends Component {

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;