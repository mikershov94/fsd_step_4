import $ from 'jquery';

import Component from '../index';

interface TOutputFieldState extends TState {
    value: number;
}

class OutputField extends Component {

    protected initStateComponent(): TOutputFieldState {
        return {
            value: this.props.value
        }
    }

    protected setTemplate(): string {
        return `<input class="output-field" />`
    }

}

export default OutputField;