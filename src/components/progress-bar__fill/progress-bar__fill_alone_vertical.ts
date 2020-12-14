import ProgressBarFill from './progress-bar__fill_alone';

class ProgressBarFillAloneVertical extends ProgressBarFill {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'progress-bar__fill_alone_vertical';
    }

    protected doingRender(): void {
        let startPercent: number = this.calcStart(this.state.start, this.state.max, this.state.min);
        let endPercent: number = this.calcEnd(this.state.start, this.state.end, this.state.max, this.state.min);

        this.jQueryElement.css('bottom', `${startPercent}%`);
        this.jQueryElement.css('height', `${endPercent}%`);
    
    }

    protected updateRender(): void {
        let startPercent: number = this.calcStart(this.state.start, this.state.max, this.state.min);
        let endPercent: number = this.calcEnd(startPercent, this.state.end, this.state.max, this.state.min);
        
        this.jQueryElement.css('bottom', `${startPercent}%`);
        this.jQueryElement.css('height', `${endPercent}%`);

    }

    protected calcStart(value: number, max: number, min: number): number {
        let fill: number = (value * 100) / (max - min);
        return fill;
    }

    protected calcEnd(startPercent: number, end: number, max: number, min: number): number {
        const sizeSliderPercent: number = (this.state.sizeSlider * 100) / this.state.railLengthPx / 2;

        let fill: number = (end * 100) / (max - min) - startPercent;
        fill += sizeSliderPercent

        if (fill <= sizeSliderPercent) fill = sizeSliderPercent;
        if (fill >= 100 - startPercent - sizeSliderPercent) fill = 100 - startPercent - sizeSliderPercent;

        return fill;
    }

}

export default ProgressBarFillAloneVertical;