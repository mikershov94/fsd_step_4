import Component from '../index';

interface TSliderState extends TState {
    min: number;
    max: number;
    value: number;
    position: number;
    size: number;
    limitA: number;
    limitB: number;
    railLengthPx: number;
}

abstract class Slider extends Component {

    protected state: TSliderState;

    protected onMouseDown: TDownHandler;

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {}
    }

    protected initStateComponent(): TSliderState {
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
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return this.prefix + '__slider';
    }

    protected doingAfterRender(): void {
        const outerSize: number = this.getOuter();
        this.setState({
            size: outerSize
        })

        this.dispatcher.dispatch('calculatedOuterSizeSlider', { outerSize })
    }

    protected getOuter(): number {
        return;
    }

    protected subscribeOnEvent(): void {
        this.jQueryElement.on('mousedown', this.onMouseDown);
    }

    protected calculateLimit(min: number, max: number, value: number): number {
        return (value * 100) / (max - min);
    }

    protected calculatePosition(min: number, max: number, value: number): number {
        let position: number = (value * 100) / (max - min);
    
        const sizeSliderPercent: number = (this.state.size * 100) / this.state.railLengthPx;
        if (position <= this.state.limitA) position = this.state.limitA;
        if (position >= (this.state.limitB - sizeSliderPercent)) position = this.state.limitB - sizeSliderPercent;
    

        return position
    }

    protected setPosition(): void {
        const min: number = this.state.limitA;  //минимальный предел движения
        const max: number = this.state.limitB;  //максимальный предел двидения
        const value: number = this.state.value; //значение, на которое указывает бегунок

        let position: number = this.calculatePosition(min, max, value);
        this.setState({position});
    }

}

export default Slider;