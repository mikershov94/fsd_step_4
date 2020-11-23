import Model from './model';

class RangeSliderModel extends Model implements ISliderModel {

    constructor(state: any) {
        super();
        this.state = {
            vertical: state.vertical,

            valueA: state.defaultValueA,
            valueB: state.defaultValueB,
            min:  state.min,
            max:  state.max,
            step: state.step,

            positionA: 0,
            positionB: 0,
            
            clickedSliderA: false,
            clickedSliderB: false,

            offsetRail: 0,
            lengthRail: 0,
            outerSizeSlider: 0,
        }
    }

    moveSlider(posPointer: number): number {
        
        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const lengthRail: number = this.getState().lengthRail;
        const outerSizeSlider: number = this.getState().outerSizeSlider;
    
        newValue = (posPointer - offsetRail) * (max - min) / lengthRail;

        if (newValue >= max) newValue = max;
        if (newValue <= min) newValue = min;

        return newValue;
    
    }

    moveVerticalSlider(posPointer: number): number {

        let offset: number;
        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const lengthRail: number = this.getState().lengthRail;
        const outerSizeSlider: number = this.getState().outerSizeSlider;

        offset = (posPointer - offsetRail) * (max - min) / lengthRail;
        newValue = max - offset;

        if (newValue >= max) newValue = max;
        if (newValue <= min) newValue = min;

        return newValue;
    }

    

}

export default RangeSliderModel;