import Model from './model';

class AloneSliderModel extends Model implements ISliderModel {

    constructor(state: any) {
        super();
        this.state = {
            vertical: state.vertical,
            
            value: 0,           //логическое значение
            min:  state.min,
            max:  state.max,
            step: state.step,

            position: state.defaultPosition,    //позиция бегунка на странице (в пикселях)

            offsetRail: 0,
            widthRail: 0,       //по-умолчанию (изначально) ширина рельсы 0
            leftLimitMove: 0,
            rightLimitMove: 0,
            outerSizeSlider: 0,
            
            scaleIndex: 1       //по умолчанию коэффициент масштаба шкалы 1
        }
    }

    moveSlider(posPointer: number): number {

        let newPosition: number;
        const sizeSlider: number = this.getState().outerSizeSlider;
        const offsetRail: number = this.getState().offsetRail;
        const leftLimit: number = this.getState().leftLimitMove;
        const rightLimit: number = this.getState().rightLimitMove;

        const scaleIndex: number = this.getState().scaleIndex;

        newPosition = posPointer - sizeSlider / 2 - offsetRail;
    
        if (newPosition < leftLimit) newPosition = leftLimit;
        if (newPosition > (rightLimit - sizeSlider)) newPosition = (rightLimit - sizeSlider);
    
        return newPosition;
    
    }

    calculateScaleIndex({min, max, width}: TMessage): number {

        let scaleIndex: number = (max - min) / width;
        this.setState({scaleIndex});

        return scaleIndex;
    }
    
    calculateValue({pos, index}: TMessage): number {
        let value: number = Math.round(pos * index);
        this.setState({value});
        return value;
    }

};

export default AloneSliderModel;