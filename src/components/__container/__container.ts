import Component from '../index';

interface TContainerState extends TState {
    prefix: string;
}

class Container extends Component {

    protected state: TContainerState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TContainerState {
        return {
            prefix: this.props.prefix,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        
        return prefix + '__container';
    }

}

export default Container;