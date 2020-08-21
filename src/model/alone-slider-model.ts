import Model from './model';

class AloneSliderModel extends Model {

    constructor(state: any) {
        super();
        this.state = {
            min:  state.min,
            max:  state.max,
            step: state.step,
            position: state.defaultPosition
        }
    }

};

export default AloneSliderModel;