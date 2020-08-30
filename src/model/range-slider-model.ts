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
            offsetRail: 0,
            offsetWidth: 0,
            clickSliderA: false,
            clickSliderB: false,
        }
    }

}

export default RangeSliderModel;