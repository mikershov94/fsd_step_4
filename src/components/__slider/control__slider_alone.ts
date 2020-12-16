import ControlSlider from './control__slider';

class ControlSliderAlone extends ControlSlider {

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {
            this.parent.afterRender();
            this.dispatcher.dispatch('mouseDown', {});
        }

    }

    protected doingRender(): void {
        this.setPosition();
        this.jQueryElement.css('left', `${this.state.position}%`);
    }

    protected getOuter(): number {
        return this.jQueryElement.outerWidth();
    }

    protected updateState(): void {
        const min: number = this.state.min;  //минимальное значение рельсы
        const max: number = this.state.max;  //максимальное значение рельсы

        this.setState({
            railLengthPx: this.props.lengthRail,
            value: this.props.value,
        });
                
        this.setState({
            position: this.calculatePosition(min, max, this.props.value),
        }); 
        
    }

    protected updateRender(): void {
        this.jQueryElement.css('left', `${this.state.position}%`);
    }


}

export default ControlSliderAlone;