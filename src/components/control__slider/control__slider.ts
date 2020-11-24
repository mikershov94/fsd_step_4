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
        return {
            min: this.props.min,
            max: this.props.max,
            value: this.props.value,
            position: this.props.position,
            size: this.props.size,
            limitA: 0,
            limitB: 100,
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
                    limitB: this.calculatePosition(min, max, this.props.valueB)
                });

                const posA: number = this.calculatePosition(min, max, this.state.value);
                this.setState({
                    position: this.limitMoving(posA, min, this.state.limitB),
                });
                console.log(this.state)
                return;

            case 'sliderB':
                this.setState({
                    railLengthPx: this.props.lengthRail,
                    value: this.props.valueB,
                    limitA: this.calculatePosition(min, max, this.props.valueA),
                });

                const posB: number = this.calculatePosition(min, max, this.state.value);
                this.setState({
                    position: this.limitMoving(posB, this.state.limitA, max),
                });
                return;

            default:
                this.setState({
                    railLengthPx: this.props.lengthRail,
                    value: this.props.value,
                });
                this.setState({
                    position: this.calculatePosition(min, max, this.state.value),
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
        if (position >= (100 - sizeSliderPercent)) position = 100 - sizeSliderPercent;
        
        return position
    }

    private limitMoving(position: number, min: number, max: number): number {
        const sizeSliderPercent: number = (this.state.size * 100) / this.state.railLengthPx;
        let result: number = position;

        switch (this.state.type) {  //определяем пределы движения бегунка

            case 'sliderA':
                if (position >= (max - sizeSliderPercent)) result = max - sizeSliderPercent;
                console.log(max)
                return result;

            case 'sliderB':
                if (position <= (min + sizeSliderPercent)) result = min + sizeSliderPercent;
                return result;

            default:
                result = position
                return result;

        }
    } 

}

export default ControlSlider;