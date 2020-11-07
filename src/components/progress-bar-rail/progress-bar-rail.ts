import Component from "..";

interface TProgressBarRail extends TState {
    vertical: boolean;
}

class ProgressBarRail extends Component {

    protected initStateComponent(): TProgressBarRail {
        return {
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar-rail');

        return `<div class="${style}"></div>`;
    }

}

export default ProgressBarRail;