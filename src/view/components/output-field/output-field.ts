import $ from 'jquery';

import Component from '../index';

interface TOutputFieldState extends TState {
    value: number;
}

class OutputField extends Component {

    protected state: TOutputFieldState;

    afterMount(): void {
        this.state = {
            value: this.props.value,
        }
    }

    protected setParameters(): void {
        this.jQueryElement.val(this.state.value);
    }

    protected setTemplate(): string {
        return `<input class="output-field" />`
    }

}

export default OutputField;