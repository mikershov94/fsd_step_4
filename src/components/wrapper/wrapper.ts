import Component from '../index';

interface TWrapperState extends TState {
    offset: number;
}

class Wrapper extends Component {
    
    protected calculateOffset(): void {
        this.dispatcher.dispatch('calculatedOffset', {
            offset: this.jQueryElement.offset().left
        })
    }

    protected setTemplate(): string {
        return '<div class="wrapper"></div>';
    }

}

export default Wrapper;