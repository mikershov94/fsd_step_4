import Model from './model';

class RangeSliderModel extends Model implements IRangeSliderModel {

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

    moveSliderA(posPointer: number): number {
        
        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const lengthRail: number = this.getState().lengthRail;
        const outerSizeSlider: number = this.getState().outerSizeSlider;
        const valueB: number = this.getState().valueB;
    
        newValue = (posPointer - offsetRail) * (max - min) / lengthRail;
        
        if (newValue >= valueB) newValue = valueB;
        if (newValue <= min) newValue = min;

        return newValue;
    
    }

    moveSliderB(posPointer: number): number {
        
        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const lengthRail: number = this.getState().lengthRail;
        const outerSizeSlider: number = this.getState().outerSizeSlider;
        const valueA: number = this.getState().valueA;
    
        newValue = (posPointer - offsetRail) * (max - min) / lengthRail;
        
        if (newValue >= max) newValue = max;
        if (newValue <= valueA) newValue = valueA;

        return newValue;
    
    }

    moveVerticalSliderA(posPointer: number): number {
        
        let offset: number;
        let newValue: number;
        
        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().min;
        const lengthRail: number = this.getState().lengthRail;
        const valueB: number = this.getState().valueB;
        const outerSizeSlider: number = this.getState().outerSizeSlider;

        const sizeSliderPercent: number = outerSizeSlider * (max - min) / lengthRail;

        offset = (posPointer - offsetRail) * (max - min) / lengthRail;
        newValue = max - offset;
        
        if (newValue >= valueB - sizeSliderPercent) newValue = valueB - sizeSliderPercent;
        if (newValue <= min) newValue = min;

        return newValue;
    }

    moveVerticalSliderB(posPointer: number): number {

        let offset: number;
        let newValue: number;

        const offsetRail: number = this.getState().offsetRail;
        const max: number = this.getState().max;
        const min: number = this.getState().valueA;
        const lengthRail: number = this.getState().lengthRail;
        const valueA: number = this.getState().valueA;
        const outerSizeSlider: number = this.getState().outerSizeSlider;

        const sizeSliderPercent: number = outerSizeSlider * (max - min) / lengthRail;
        offset = (posPointer - offsetRail) * (max - min) / lengthRail;
        newValue = max - offset;

        if (newValue >= max) newValue = max;
        if (newValue <= valueA + sizeSliderPercent) newValue = valueA + sizeSliderPercent;
        
        return newValue;
    }

    

}

export default RangeSliderModel;