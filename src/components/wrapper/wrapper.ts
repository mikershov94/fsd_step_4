import $ from 'jquery';

import Component from '../index';

interface TWrapperState extends TState {
    offset: number;
}

class Wrapper extends Component {

    protected doingRender(): void {
        this.dispatcher.dispatch('wrapperRender', {
            offset: this.jQueryElement.offset().left
        })
    }

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;