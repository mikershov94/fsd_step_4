import Model from './model';

class RangeSliderModel extends Model implements ISliderModel {

    constructor(state: TState) {
        super();
        this.state = {
            vertical: state.vertical,

            valueA: state.defaultValueA,
            valueB: state.defaultValueB,
            min:  state.min,
            max:  state.max,
            step: state.step,

            positionA: 0,
            positionB: 0,

            offsetRail: 0,
            outerSizeSlider: 0,
        }
    }

    moveSlider(posPointer: number): number {
        return
    }

    moveVerticalSlider(): number {
        return
    }
    
    calculateScaleIndex({}: TMessage): number {
        return
    }

    calculateValue({}: TMessage): number {
        return
    }

}

export default RangeSliderModel;