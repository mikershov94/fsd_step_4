import View from './view';
import {ControlSliderStartVertical, ControlSliderEndVertical} from '../components/__slider';
import {ProgressBarFillRangeVertical} from '../components/__fill';
import {ProgressBarVertical} from '../components/__progress-bar';
import {ScaleVertical} from '../components/__scale';
import {ControlRailVertical} from '../components/__rail';
import {OutputFieldStartVertical, OutputFieldEndVertical} from '../components/__field';
import {ControlVertical} from '../components/__control';
import {OutputVertical} from '../components/__output';
import {ContainerVertical} from '../components/__container';

class RangeVerticalView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const controlSliderA = new ControlSliderStartVertical({
            min: props.min,
            max: props.max,
            value: props.valueA,
            position: props.positionA,
            limitA: props.min,
            limitB: props.valueB,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const controlSliderB = new ControlSliderEndVertical({
            min: props.min,
            max: props.max,
            value: props.valueB,
            position: props.positionB,
            limitA: props.valueA,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);
        
        const progressBarFill = new ProgressBarFillRangeVertical({
            max: props.max,
            min: props.min,
            start: props.valueA,
            end: props.valueB,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const progressBar = new ProgressBarVertical({
            prefix: this.rootContainerClass,
        }, [
            progressBarFill,
        ])
    
        const scale = new ScaleVertical({
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const controlRail = new ControlRailVertical({
            min: props.min,
            max: props.max,
        }, [
            controlSliderA,
            controlSliderB,
            progressBar
        ]);

        const outputFieldA = new OutputFieldStartVertical({
            value: props.valueA,
        }, []);

        const outputFieldB = new OutputFieldEndVertical({
            value: props.valueB,
        }, []);

        const control = new ControlVertical({
            prefix: this.rootContainerClass,
        }, [
            controlRail,
            scale
        ]);
        const output = new OutputVertical({
            prefix: this.rootContainerClass,
        }, [
            outputFieldA,
            outputFieldB
        ]);

        const container = new ContainerVertical({
            prefix: this.rootContainerClass,
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
}

export default RangeVerticalView;