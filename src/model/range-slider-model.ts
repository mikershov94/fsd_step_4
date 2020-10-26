import Model from './model';

class RangeSliderModel extends Model implements ISliderModel {

    constructor(state: any) {
        super();
        this.state = {
            vertical: state.vertical,
            min:  state.min,
            max:  state.max,
            step: state.step,
            positionA: state.defaultPositionA,
            positionB: state.defaultPositionB,
            offsetRail: 0,
            sizeSlider: 0,
            clickSliderA: false,
            clickSliderB: false,
        }
    }

    moveSlider({}: TMessage): number {
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