import $ from 'jquery';

import Component from '../index';

interface TProgressBarState extends TState {
    positionA: number;
    positionB: number;
}

class ProgressBar extends Component {

    protected state: TProgressBarState

    afterMount(): void {
        this.state = {
            positionA: this.props.positionA,
            positionB: this.props.positionB
        }
    }

    protected setParameters(): void {
        this.jQueryElement.css('left', `${this.state.positionA}px`);
        
        let width: number = this.state.positionB - this.state.positionA;
        this.jQueryElement.css('width', `${width}px`);
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }
}

export default ProgressBar;