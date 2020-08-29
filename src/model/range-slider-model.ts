import Model from './model';

class RangeSliderModel extends Model {

    constructor(state: any) {
        super();
        this.state = {
            min:  state.min,
            max:  state.max,
            step: state.step,
            positionA: state.defaultPositionA,
            positionB: state.defaultPositionB,
            clickSliderA: false,
            clickSLiderB: false,
        }
    }

}

export default RangeSliderModel;