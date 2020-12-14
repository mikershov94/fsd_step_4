import Component from "..";

interface TProgressBarState extends TState {
    prefix: string;
}

class ProgressBar extends Component {

    protected state: TProgressBarState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TProgressBarState {
        return {
            prefix: this.props.prefix,
        }
    }

    protected setTemplate(): string {
        const style: string = this.setStyle();
        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        return prefix + '__progress-bar'
    }

}

export default ProgressBar;