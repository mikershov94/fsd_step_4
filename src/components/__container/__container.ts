import Component from '../index';

interface TContainerState extends TState {
    prefix: string;
    vertical: boolean;
}

class Container extends Component {

    protected state: TContainerState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TContainerState {
        return {
            prefix: this.props.prefix,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        const prefix: string = this.state.prefix;
        const style: string = this.setStyle(prefix + '__container')

        return `<div class="${style}"></div>`
    }

}

export default Container;