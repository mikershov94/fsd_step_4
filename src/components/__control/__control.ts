import Component from '../index';

interface TControlState extends TState {
    prefix: string;
    vertical: boolean;
}

class Control extends Component {

    protected state: TControlState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TControlState {
        return {
            prefix: this.props.prefix,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        const prefix: string = this.state.prefix;
        const style: string = this.setStyle(prefix + '__control')

        return `<div class="${style}"></div>`;
    }

    protected doingAfterRender(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

}

export default Control;