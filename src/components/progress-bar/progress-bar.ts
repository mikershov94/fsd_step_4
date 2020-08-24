import $ from 'jquery';

import Component from '../index';

interface TProgressBarState extends TState {
    positionA: number;
    positionB: number;
}

class ProgressBar extends Component {

    protected initStateComponent(): TProgressBarState {
        return {
            positionA: this.props.positionA,
            positionB: this.props.positionB
        }
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }
}

export default ProgressBar;