import Model from './model';

class AloneSliderModel extends Model {

    constructor(state: any) {
        super();
        this.state = {
            vertical: state.vertical,
            min:  state.min,
            max:  state.max,
            step: state.step,
            offsetRail: 0,
            offsetWidth: 0,
            position: state.defaultPosition
        }
    }

};

export default AloneSliderModel;