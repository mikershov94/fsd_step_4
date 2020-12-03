import Component from '../index';

interface TProgressBarFillState extends TState {
    max: number;
    min: number;
    start: number;
    end: number;
    sizeSlider: number,
    railLengthPx: number,
    vertical: boolean;
    prefix: string;
    type: string;
}

class ProgressBarFill extends Component {

    protected state: TProgressBarFillState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TProgressBarFillState {
        return {
            max: this.props.max,
            min: this.props.min,
            start: this.props.start,
            end: this.props.end,
            sizeSlider: this.props.outerSizeSlider,
            railLengthPx: this.props.railLengthPx,
            vertical: this.props.vertical,
            prefix: this.props.prefix,
            type: this.props.type,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('progress-bar__fill');

        return `<div class="${style}"></div>`;
    }

    protected doingRender(): void {
        let startPercent: number = this.calcStart(this.state.start, this.state.max, this.state.min);
        let endPercent: number = this.calcEnd(this.state.start, this.state.end, this.state.max, this.state.min);

        if (this.state.vertical) {
            this.jQueryElement.css('bottom', `${startPercent}%`);
            this.jQueryElement.css('height', `${endPercent}%`);
            return;
        }

        this.jQueryElement.css('left', `${startPercent}%`);
        this.jQueryElement.css('width', `${endPercent}%`);
    }


    protected updateState(): void {
        switch (this.state.type) {
            case 'alone':
                this.setState({
                    start: this.props.min,
                    end: this.props.value,
                    sizeSlider: this.props.outerSizeSlider,
                    railLengthPx: this.props.lengthRail,
                });
                return;

            case 'range':
                this.setState({
                    start: this.props.valueA,
                    end: this.props.valueB,
                    sizeSlider: this.props.outerSizeSlider,
                    railLengthPx: this.props.lengthRail,
                });
                return;

            default:
                this.setState({
                    start: this.props.min,
                    end: this.props.value,
                    sizeSlider: this.props.outerSizeSlider,
                    railLengthPx: this.props.lengthRail,
                });
                return; 

        }
    }

    protected updateRender(): void {
        let startPercent: number = this.calcStart(this.state.start, this.state.max, this.state.min);
        let endPercent: number = this.calcEnd(startPercent, this.state.end, this.state.max, this.state.min);

        if (this.state.vertical) {
            this.jQueryElement.css('bottom', `${startPercent}%`);
            this.jQueryElement.css('height', `${endPercent}%`);
            return;
        }

        this.jQueryElement.css('left', `${startPercent}%`);
        this.jQueryElement.css('width', `${endPercent}%`);
    }

    private calcStart(value: number, max: number, min: number): number {
        const sizeSliderPercent: number = (this.state.sizeSlider * 100) / this.state.railLengthPx / 2;

        let fill: number = (value * 100) / (max - min);
        
        //fill = this.state.vertical ? fill - sizeSliderPercent : fill;
        
        //if (fill <= sizeSliderPercent) fill = sizeSliderPercent;
        //if (fill >= 100) fill = 100;
        
        return fill;
    }

    private calcEnd(startPercent: number, end: number, max: number, min: number): number {
        const sizeSliderPercent: number = (this.state.sizeSlider * 100) / this.state.railLengthPx / 2;

        let fill: number = (end * 100) / (max - min) - startPercent;
        console.log(fill)
        
        fill = this.state.vertical ? fill - sizeSliderPercent : fill + sizeSliderPercent;
        
        if (fill <= sizeSliderPercent) fill = sizeSliderPercent;
        if (fill >= 100) fill = 100;
        
        return fill;
    }

}

export default ProgressBarFill;