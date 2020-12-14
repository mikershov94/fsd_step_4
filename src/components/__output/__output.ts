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
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        return prefix + '__output';
    }

}

export default Output
