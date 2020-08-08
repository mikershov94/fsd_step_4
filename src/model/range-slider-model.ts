import Model from './model';

class RangeSliderModel extends Model {

    protected data: TRangeGlobalState;

    constructor(state: any) {
        super(state);
        this.data.positionA = state.defaultPositionA;
        this.data.positionB = state.defaultPositionB;
    }

}

export default RangeSliderModel;