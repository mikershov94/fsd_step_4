import Component from '../index';

interface TOutputState extends TState {
    prefix: string;
}

class Output extends Component {

    protected state: TOutputState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TOutputState {
        return {
            prefix: this.props.prefix,
        }
    }

    protected setTemplate(): string {
        return '<div class="output"></div>';
    }

}

export default Output
