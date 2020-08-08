import Model from './model';

class AloneSliderModel extends Model {
    
    protected data: TAloneGlobalState;

    constructor(state: any) {
        super(state);
        this.data.position = state.defaultPosition;
    }

};

export default AloneSliderModel;