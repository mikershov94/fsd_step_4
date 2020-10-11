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
            sizeSlider: 0,
            widthRail: 0,       //по-умолчанию (изначально) ширина рельсы 0
            position: state.defaultPosition,
            scaleIndex: 1       //по умолчанию коэффициент масштаба шкалы 1
        }
    }

};

export default AloneSliderModel;