import Component from '../index';

interface TControlState extends TState {
    vertical: number;
}

class Input extends Component {

    protected state: TControlState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }
    
    protected doingAfterRender(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected initStateComponent(): TControlState {
        return {
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        const style: string = this.setStyle('control')

        return `<div class="${style}"></div>`;
    }

}

export default Input;