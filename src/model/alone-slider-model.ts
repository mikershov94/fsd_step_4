import Model from './model';

class AloneSliderModel extends Model implements ISliderModel {

    constructor(state: any) {
        super();
        this.state = {
            vertical: state.vertical,
            
            value: state.defaultValue,           //логическое значение
            min:  state.min,
            max:  state.max,
            step: state.step,

            position: 0,    //позиция бегунка на странице (в процентах)

            offsetRail: 0,
            widthRail: 0,       //по-умолчанию (изначально) ширина рельсы 0
            outerSizeSlider: 0,
        }
    }

    moveSlider(posPointer: number): number {

        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const widthRail: number = this.getState().widthRail;
        const outerSizeSlider: number = this.getState().outerSizeSlider;

        newValue = (posPointer - offsetRail) * (max - min) / widthRail;

        if (newValue >= max) newValue = max;
        if (newValue <= min) newValue = min;

        return newValue;
    
    }

};

export default AloneSliderModel;