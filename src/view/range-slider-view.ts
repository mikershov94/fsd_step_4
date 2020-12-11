import View from './view';
import ControlSlider from '../components/control__slider';
import ProgressBarFill from '../components/progress-bar__fill';
import ProgressBar from '../components/__progress-bar';
import Scale from '../components/__scale';
import ControlRail from '../components/control__rail';
import OutputField from '../components/output__field';
import Control from '../components/__control';
import Output from '../components/__output';
import Container from '../components/__container';

class RangeSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const controlSliderA = new ControlSlider({
            min: props.min,
            max: props.max,
            value: props.valueA,
            position: props.positionA,
            limitA: props.min,
            limitB: props.valueB,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
            vertical: props.vertical,
            type: 'sliderA'
        });

        const controlSliderB = new ControlSlider({
            min: props.min,
            max: props.max,
            value: props.valueB,
            position: props.positionB,
            limitA: props.valueA,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
            vertical: props.vertical,
            type: 'sliderB'
        });
        
        const progressBarFill = new ProgressBarFill({
            max: props.max,
            min: props.min,
            start: props.valueA,
            end: props.valueB,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
            type: 'range',
            vertical: props.vertical,
        }, []);

        const progressBar = new ProgressBar({
            prefix: this.rootContainerClass,
            vertical: props.vertical
        }, [
            progressBarFill,
        ])
    
        const scale = new Scale({
            prefix: this.rootContainerClass,
            vertical: props.vertical,
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const controlRail = new ControlRail({
            min: props.min,
            max: props.max,
            vertical: props.vertical
        }, [
            controlSliderA,
            controlSliderB,
            progressBar
        ]);

        const outputFieldA = new OutputField({
            value: props.valueA,
            type: 'start'
        }, []);

        const outputFieldB = new OutputField({
            value: props.valueB,
            type: 'end'
        }, []);

        const control = new Control({
            prefix: this.rootContainerClass,
            vertical: props.vertical
        }, [
            controlRail,
            scale
        ]);
        const output = new Output({
            prefix: this.rootContainerClass,
            vertical: props.vertical
        }, [
            outputFieldA,
            outputFieldB
        ]);

        const container = new Container({
            prefix: this.rootContainerClass,
            vertical: props.vertical
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
}

export default RangeSliderView;