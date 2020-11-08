import Component from "..";

interface TProgressBarState extends TState {
    prefix: string;
    vertical: boolean;
}

class ProgressBar extends Component {

    protected state: TProgressBarState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TProgressBarState {
        return {
            prefix: this.props.prefix,
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        const prefix: string = this.state.prefix;
        const style: string = this.setStyle(prefix + '__progress-bar');

        return `<div class="${style}"></div>`;
    }

}

export default ProgressBar;