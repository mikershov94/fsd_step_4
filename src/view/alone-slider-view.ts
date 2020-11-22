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

class AloneSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    

    mountApplication(props: TMessage): void {
        const controlSlider = new ControlSlider({
            min: props.min,
            max: props.max,
            value: props.value,
            position: props.position,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
            type: 'alone',
            vertical: props.vertical
        });
        
        const progressBarFill = new ProgressBarFill({
            max: props.max,
            min: props.min,
            start: props.min,
            end: props.value,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
            type: 'alone',
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
            controlSlider,
            progressBar
        ]);

        const outputField = new OutputField({
            value: props.value,
        }, []);

        const control = new Control({
            prefix: this.rootContainerClass,
            vertical: props.vertical
        }, [
            controlRail,
            scale
        ]);
        const output = new Output({
            prefix: this.rootContainerClass
        }, [
            outputField
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
export default AloneSliderView;