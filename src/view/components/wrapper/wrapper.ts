import $ from 'jquery';

import Component from '../index';

interface TWrapperState extends TState {
    offset: number;
}

class Wrapper extends Component {

    protected state: TWrapperState;

    private calculateOffset(): number {
        let res = this.jQueryElement.offset().left;
        return res;
    }

    protected doingRender(): void {
        let offset: number = this.calculateOffset();
        this.update({
            offset: offset
        })
    }

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;