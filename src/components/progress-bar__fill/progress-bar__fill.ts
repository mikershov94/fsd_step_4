import Component from '../index';

interface TProgressBarFillState extends TState {
    max: number;
    min: number;
    value: number;
    sizeSlider: number,
    railWidthPx: number,
    type: string;
    vertical: boolean;
}

class ProgressBarFill extends Component {

    protected state: TProgressBarFillState;

    protected initStateComponent(): TProgressBarFillState {
        return {
            max: this.props.max,
            min: this.props.min,
            value: this.props.value,
            sizeSlider: this.props.outerSizeSlider,
            railWidthPx: this.props.widthRail,
            type: this.props.type,
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar__fill');

        return `<div class="${style}"></div>`;
    }

    protected doingRender(): void {
        let fillPercent: number = this.fillIn(this.state.value, this.state.max, this.state.min);

        if (this.state.vertical) {
            this.jQueryElement.css('top', `${0}%`);
            this.jQueryElement.css('height', `${fillPercent}%`);
            return;
        }

        this.jQueryElement.css('left', `${0}%`);
        this.jQueryElement.css('width', `${fillPercent}%`);
    }


    protected updateState(): void {
        switch (this.state.type) {
            
            case 'alone':
                this.setState({
                    value: this.props.value,
                    sizeSlider: this.props.outerSizeSlider,
                    railWidthPx: this.props.widthRail,
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
                    value: this.props.value,
                    sizeSlider: this.props.outerSizeSlider,
                    railWidthPx: this.props.widthRail,
                });
                return;

        }
    }

    protected updateRender(): void {
        let fillPercent: number = this.fillIn(this.state.value, this.state.max, this.state.min);
        
        
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${0}%`);
            this.jQueryElement.css('height', `${fillPercent}%`);
            return;
        }

        this.jQueryElement.css('left', `${0}%`);
        this.jQueryElement.css('width', `${fillPercent}%`);
    }

    protected fillIn(value: number, max: number, min: number): number {
        const sizeSliderPercent: number = (this.state.sizeSlider * 100) / this.state.railWidthPx / 2;

        let fill: number = (value * 100) / (max - min);
        fill = fill + sizeSliderPercent;

        if (fill <= sizeSliderPercent) fill = sizeSliderPercent;
        if (fill >= 100) fill = 100;

        return fill;
    }

}

export default ProgressBarFill;