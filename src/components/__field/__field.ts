import Component from '../index';

interface TFieldState extends TState {
    value: number;
}

abstract class Field extends Component {

    protected state: TFieldState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TFieldState {
        return {
            value: this.props.value,
        }
    }

    protected setTemplate(): string {
        const style: string = this.setStyle();
        return `<input class="${style}" />`
    }

    protected setStyle(): string {
        return ''
    }

    protected doingRender(): void {
        let value: number = Math.round(this.state.value);

        this.jQueryElement.val(value);
    }

    protected doingAfterRender(): void {
        this.dispatcher.dispatch('getValue', {});
    }

    protected updateRender(): void {
        let value: number = Math.round(this.state.value);

        this.jQueryElement.val(value);
    }

}

export default Field;