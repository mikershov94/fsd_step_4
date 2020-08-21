import Model from './model';

class AloneSliderModel extends Model {
    
    protected data: TAloneGlobalState;

    constructor(state: any) {
        super();
        this.data = {
            min:  state.min,
            max:  state.max,
            step: state.step,
            position: state.defaultPosition
        }
    }

};

export default AloneSliderModel;