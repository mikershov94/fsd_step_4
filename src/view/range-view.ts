import View from './view';
import {ControlSliderStart, ControlSliderEnd} from '../components/control__slider';
import {ProgressBarFillRange} from '../components/progress-bar__fill';
import {ProgressBar} from '../components/__progress-bar';
import {Scale} from '../components/__scale';
import {ControlRail} from '../components/control__rail';
import {OutputFieldStart, OutputFieldEnd} from '../components/output__field';
import {Control} from '../components/__control';
import {Output} from '../components/__output';
import {Container} from '../components/__container';

class RangeSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const controlSliderA = new ControlSliderStart({
            min: props.min,
            max: props.max,
            value: props.valueA,
            position: props.positionA,
            limitA: props.min,
            limitB: props.valueB,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const controlSliderB = new ControlSliderEnd({
            min: props.min,
            max: props.max,
            value: props.valueB,
            position: props.positionB,
            limitA: props.valueA,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);
        
        const progressBarFill = new ProgressBarFillRange({
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

        const controlRail = new ControlRail({
            min: props.min,
            max: props.max,
        }, [
            controlSliderA,
            controlSliderB,
            progressBar
        ]);

        const outputFieldA = new OutputFieldStart({
            value: props.valueA,
        }, []);

        const outputFieldB = new OutputFieldEnd({
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

export default RangeSliderView;