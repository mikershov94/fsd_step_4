import Component from '../index';

interface TControlState extends TState {
    prefix: string;
}

class Control extends Component {

    protected state: TControlState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TControlState {
        return {
            prefix: this.props.prefix,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected doingAfterRender(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        return prefix + '__control';
    }

}

export default Control;