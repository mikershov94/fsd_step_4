import SliderAlone from './__slider_alone';

class SliderAloneVertical extends SliderAlone {

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {
            this.parent.afterRender();
            this.dispatcher.dispatch('mouseDownA', {});
        }

    }

    protected doingRender(): void {
        this.setPosition();
        this.jQueryElement.css('top', `${this.state.position}%`);
    }

    protected getOuter(): number {
        return this.jQueryElement.outerHeight();
    }


    protected updateRender(): void {
        this.jQueryElement.css('top', `${this.state.position}%`)
    }

    protected calculatePosition(min: number, max: number, value: number): number {
        let position: number = 100 - (value * 100) / (max - min);
    
        const sizeSliderPercent: number = (this.state.size * 100) / this.state.railLengthPx;
        if (position <= this.state.limitA) position = this.state.limitA;
        if (position >= (this.state.limitB - sizeSliderPercent)) position = this.state.limitB - sizeSliderPercent;
    

        return position
    }

}

export default SliderAloneVertical;