import Component from '../index';

interface TProgressBarState extends TState {
    positionA: number;
    positionB: number;
    type: string;
    vertical: boolean;
}

class ProgressBar extends Component {

    protected state: TProgressBarState;

    protected initStateComponent(): TProgressBarState {
        return {
            positionA: this.props.positionA,
            positionB: this.props.positionB,
            type: this.props.type,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar');

        return `<div class="${style}"></div>`;
    }

    protected doingRender(): void {
        if (this.state.vertical) {
            const height: number = this.state.positionB - this.state.positionA;

            this.jQueryElement.css('top', `${this.state.positionA}px`);
            this.jQueryElement.css('height', `${height}px`);
            return
        }

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
        if (this.state.vertical) {
            const height: number = this.state.positionB - this.state.positionA;

            this.jQueryElement.css('top', `${this.state.positionA}px`);
            this.jQueryElement.css('height', `${height}px`);
            return
        }


        const width: number = this.state.positionB - this.state.positionA;

        this.jQueryElement.css('left', `${this.state.positionA}px`);
        this.jQueryElement.css('width', `${width}px`);
    }
}

export default ProgressBar;