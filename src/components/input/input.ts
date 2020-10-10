import Component from '../index';

interface TInputState extends TState {
    vertical: number;
}

class Input extends Component {

    protected state: TInputState;
    
    protected calculateOffset(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected initStateComponent(): TInputState {
        return {
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        return '<div class="input"></div>';
    }

}

export default Input;