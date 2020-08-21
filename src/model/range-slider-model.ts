import Model from './model';

class RangeSliderModel extends Model {

    protected data: TRangeGlobalState;

    constructor(state: any) {
        super();
        this.data = {
            min:  state.min,
            max:  state.max,
            step: state.step,
            positionA: state.defaultPositionA,
            positionB: state.defaultPositionB
        }
    }

}

export default RangeSliderModel;