import View from './view';
import ControlSlider from '../components/control__slider';
import ProgressBarFill from '../components/progress-bar__fill';
import ProgressBar from '../components/progress-bar';
import Scale from '../components/scale';
import ControlRail from '../components/control__rail';
import OutputField from '../components/output__field';
import Control from '../components/control';
import Output from '../components/output';
import Container from '../components/container';

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
            railWidthPx: props.widthRail,
            type: 'alone',
            vertical: props.vertical
        });
        
        const progressBarFill = new ProgressBarFill({
            max: props.max,
            min: props.min,
            value: props.value,
            sizeSlider: props.outerSizeSlider,
            railWidthPx: props.widthRail,
            type: 'alone',
            vertical: props.vertical,
        });

        const progressBar = new ProgressBar({
            vertical: props.vertical
        }, [
            progressBarFill,
        ])
    
        const scale = new Scale({
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
        });

        const control = new Control({
            vertical: props.vertical
        }, [
            controlRail,
            scale
        ]);
        const output = new Output({}, [
            outputField
        ]);

        const container = new Container({
            vertical: props.vertical
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneSliderView;