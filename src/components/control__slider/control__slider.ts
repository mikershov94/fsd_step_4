import Component from '../index';

interface TControlSliderState extends TState {
    min: number;
    max: number;
    value: number;
    position: number;
    size: number;
    limitA: number;
    limitB: number;
    railLengthPx: number;
    vertical: boolean;
    type: string;
}

class ControlSlider extends Component {

    protected state: TControlSliderState;

    private onMouseDown: TDownHandler;

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {
            this.parent.afterRender();

            switch (this.state.type) {
                case 'sliderA':
                    this.dispatcher.dispatch('mouseDownA', {});
                    return;

                case 'sliderB':
                    this.dispatcher.dispatch('mouseDownB', {});
                    return;

                default:
                    this.dispatcher.dispatch('mouseDown', {});
                    return;
            }
             
        }

    }

    protected initStateComponent(): TControlSliderState {
        const min: number = this.props.min;  //минимальное значение
        const max: number = this.props.max;  //максимальное значение

        return {
            min: this.props.min,
            max: this.props.max,
            value: this.props.value,
            position: this.props.position,
            size: this.props.size,
            limitA: this.calculateLimit(min, max, this.props.limitA),
            limitB: this.calculateLimit(min, max, this.props.limitB),
            railLengthPx: this.props.railLengthPx,
            vertical: this.props.vertical,
            type: this.props.type
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('control__slider');

        return `<div class="${style}"></div>`;
    }

    protected doingRender(): void {
        const min: number = this.state.limitA;  //минимальный предел движения
        const max: number = this.state.limitB;  //максимальный предел двидения
        const value: number = this.state.value; //значение, на которое указывает бегунок

        let position: number = this.calculatePosition(min, max, value);
        this.setState({position});
        
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}%`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}%`);
    }

    protected doingAfterRender(): void {
        const outerSize: number = this.state.vertical ?
                                  this.jQueryElement.outerWidth() :
                                  this.jQueryElement.outerHeight();
        this.setState({
            size: outerSize
        })

        this.dispatcher.dispatch('calculatedOuterSizeSlider', { outerSize })
    }

    protected subscribeOnEvent(): void {
        this.jQueryElement.on('mousedown', this.onMouseDown)
    }

    protected updateState(): void {
        const min: number = this.state.min;  //минимальное значение рельсы
        const max: number = this.state.max;  //максимальное значение рельсы

        switch (this.state.type) {
            
            case 'sliderA':
                this.setState({
                    railLengthPx: this.props.lengthRail,
                    value: this.props.valueA,
                    limitA: this.calculateLimit(min, max, min),
                    limitB: this.calculateLimit(min, max, this.props.valueB)
                });
                
                this.setState({
                    position: this.calculatePosition(min, max, this.props.valueA),
                });
                
                return;

            case 'sliderB':
                this.setState({
                    railLengthPx: this.props.lengthRail,
                    value: this.props.valueB,
                    limitA: this.calculateLimit(min, max, this.props.valueA),
                    limitB: this.calculateLimit(min, max, max)
                });
                
                this.setState({
                    position: this.calculatePosition(min, max, this.props.valueB),
                });
                return;

            default:
                this.setState({
                    railLengthPx: this.props.lengthRail,
                    value: this.props.value,
                });
                
                this.setState({
                    position: this.calculatePosition(min, max, this.props.value),
                });
                return;
        } 
        
    }

    protected updateRender(): void {
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}%`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}%`)

    }

    private calculatePosition(min: number, max: number, value: number): number {
        let position: number = (value * 100) / (max - min);
        if (this.state.vertical) position = 100 - position;
    
        const sizeSliderPercent: number = (this.state.size * 100) / this.state.railLengthPx;
        if (position <= this.state.limitA) position = this.state.limitA;
        if (position >= (this.state.limitB - sizeSliderPercent)) position = this.state.limitB - sizeSliderPercent;
    

        return position
    }

    private calculateLimit(min: number, max: number, value: number): number {
        let limit: number = (value * 100) / (max - min);
        //if (this.props.vertical) limit = 100 - limit;

        return limit;
    } 

}

export default ControlSlider;