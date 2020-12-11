import Component from '../index';

interface TOutputState extends TState {
    prefix: string;
    vertical: boolean
}

class Output extends Component {

    protected state: TOutputState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TOutputState {
        return {
            prefix: this.props.prefix,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        const prefix: string = this.state.prefix;
        const style: string = this.setStyle(prefix + '__output');

        return `<div class="${style}"></div>`;
    }

}

export default Output
