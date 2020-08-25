import $ from 'jquery';

import Component from '../index';

interface TProgressBarState extends TState {
    positionA: number;
    positionB: number;
}

class ProgressBar extends Component {

    protected state: TProgressBarState;

    protected initStateComponent(): TProgressBarState {
        return {
            positionA: this.props.positionA,
            positionB: this.props.positionB
        }
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }

    protected doingRender(): void {
        const width: number = this.state.positionB - this.state.positionA;

        this.jQueryElement.css('left', `${this.state.positionA}px`);
        this.jQueryElement.css('width', `${width}px`);
    }
}

export default ProgressBar;