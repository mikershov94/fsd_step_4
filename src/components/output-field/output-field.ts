import Component from '../index';

interface TOutputFieldState extends TState {
    value: number;
}

class OutputField extends Component {

    protected state: TOutputFieldState;

    protected initStateComponent(): TOutputFieldState {
        return {
            value: this.props.value
        }
    }

    protected setTemplate(): string {
        return `<input class="output-field" />`
    }

    protected doingRender(): void {
        this.jQueryElement.val(this.state.value);
    }

}

export default OutputField;