import Component from '../index';

interface TProgressBarWrapperState extends TState {
    vertical: boolean;
}

class ProgressBarWrapper extends Component {

    protected state: TProgressBarWrapperState;

    protected initStateComponent(): TProgressBarWrapperState {
        return {
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar');

        return `<div class="${style}"></div>`;
    }

}

export default ProgressBarWrapper;