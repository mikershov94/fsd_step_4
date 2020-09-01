import Component from '../index';

interface TContainerState extends TState {
    vertical: boolean;
}

class Container extends Component {

    protected state: TContainerState;

    protected initStateComponent(): TContainerState {
        return {
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('container')

        return `<div class="${style}"></div>`
    }

}

export default Container;