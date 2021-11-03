import View from './view';
import {SliderStart, SliderEnd} from '../components/__slider';
import {FillRange} from '../components/__fill';
import {ProgressBar} from '../components/__progress-bar';
import {Scale} from '../components/__scale';
import {Rail} from '../components/__rail';
import {FieldStart, FieldEnd} from '../components/__field';
import {Control} from '../components/__control';
import {Output} from '../components/__output';
import {Container} from '../components/__container';

class RangeView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const controlSliderA = new SliderStart({
            min: props.min,
            max: props.max,
            value: props.valueA,
            position: props.positionA,
            limitA: props.min,
            limitB: props.valueB,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const controlSliderB = new SliderEnd({
            min: props.min,
            max: props.max,
            value: props.valueB,
            position: props.positionB,
            limitA: props.valueA,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);
        
        const progressBarFill = new FillRange({
            max: props.max,
            min: props.min,
            start: props.valueA,
            end: props.valueB,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const progressBar = new ProgressBar({
            prefix: this.rootContainerClass,
        }, [
            progressBarFill,
        ])
    
        const scale = new Scale({
            prefix: this.rootContainerClass,
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const controlRail = new Rail({
            min: props.min,
            max: props.max,
        }, [
            controlSliderA,
            controlSliderB,
            progressBar
        ]);

        const outputFieldA = new FieldStart({
            value: props.valueA,
        }, []);

        const outputFieldB = new FieldEnd({
            value: props.valueB,
        }, []);

        const control = new Control({
            prefix: this.rootContainerClass,
        }, [
            controlRail,
            scale
        ]);
        const output = new Output({
            prefix: this.rootContainerClass,
        }, [
            outputFieldA,
            outputFieldB
        ]);

        const container = new Container({
            prefix: this.rootContainerClass,
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
}

export default RangeView;