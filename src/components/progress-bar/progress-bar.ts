import Component from "..";

interface TProgressBar extends TState {
    vertical: boolean;
}

class ProgressBar extends Component {

    protected initStateComponent(): TProgressBar {
        return {
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar');

        return `<div class="${style}"></div>`;
    }

}

export default ProgressBar;