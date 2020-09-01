import Component from '../index';

interface TWrapperState extends TState {
    vertical: number;
}

class Wrapper extends Component {

    protected state: TWrapperState;
    
    protected calculateOffset(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected initStateComponent(): TWrapperState {
        return {
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        return '<div class="wrapper wrapper_vertical"></div>';
    }

}

export default Wrapper;