import Component from '../index';

interface TOutputFieldState extends TState {
    value: number;
    type: string;
}

class OutputField extends Component {

    protected state: TOutputFieldState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TOutputFieldState {
        return {
            value: this.props.value,
            type: this.props.type
        }
    }

    protected setTemplate(): string {
        const style: string = this.setStyle('output__field');

        return `<input class="${style}" />`
    }

    protected doingRender(): void {
        let value: number = Math.round(this.state.value);

        this.jQueryElement.val(value);
    }

    protected doingAfterRender(): void {
        this.dispatcher.dispatch('getValue', {});
    }

    protected updateState(): void {
        switch (this.state.type) {

            case 'start':
                this.setState({
                    value: this.props.positionA
                });
                return;

            case 'end':
                this.setState({
                    value: this.props.positionB
                });
                return;

            default:
                this.setState({
                    value: this.props.value
                });
                return;

        }
    }

    protected updateRender(): void {
        let value: number = Math.round(this.state.value);

        this.jQueryElement.val(value);
    }

}

export default OutputField;