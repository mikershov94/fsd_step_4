import Component from '../index';

interface TProgressBarState extends TState {
    positionA: number;
    positionB: number;
    type: string;
}

class ProgressBar extends Component {

    protected state: TProgressBarState;

    protected initStateComponent(): TProgressBarState {
        return {
            positionA: this.props.positionA,
            positionB: this.props.positionB,
            type: this.props.type
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

    protected updateState(): void {
        switch (this.state.type) {
            
            case 'alone':
                this.setState({
                    positionA: this.props.min,
                    positionB: this.props.position
                });
                return;

            case 'range':
                this.setState({
                    positionA: this.props.positionA,
                    positionB: this.props.positionB
                });
                return;

            default:
                this.setState({
                    positionA: this.props.min,
                    positionB: this.props.position
                });
                return;

        }
    }

    protected updateRender(): void {
        const width: number = this.state.positionB - this.state.positionA;

        this.jQueryElement.css('left', `${this.state.positionA}px`);
        this.jQueryElement.css('width', `${width}px`);
    }
}

export default ProgressBar;