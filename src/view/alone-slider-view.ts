import View from './view';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
import ProgressBarRail from '../components/progress-bar-rail';
import Scale from '../components/scale';
import Rail from '../components/rail';
import OutputField from '../components/output-field';
import Input from '../components/input';
import Output from '../components/output';
import Container from '../components/container';

class AloneSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    

    mountApplication(props: TMessage): void {
        const slider = new Slider({
            min: props.min,
            max: props.max,
            value: props.value,
            position: props.position,
            size: props.outerSizeSlider,
            railWidthPx: props.widthRail,
            type: 'alone',
            vertical: props.vertical
        });
        
        const progressBar = new ProgressBar({
            max: props.max,
            min: props.min,
            value: props.value,
            sizeSlider: props.outerSizeSlider,
            railWidthPx: props.widthRail,
            type: 'alone',
            vertical: props.vertical,
        });

        const progressBarRail = new ProgressBarRail({
            vertical: props.vertical
        }, [
            progressBar,
        ])
    
        const scale = new Scale({
            vertical: props.vertical,
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const rail = new Rail({
            min: props.min,
            max: props.max,
            vertical: props.vertical
        }, [
            slider,
            progressBarRail
        ]);

        const outputField = new OutputField({
            value: props.value,
        });

        const input = new Input({
            vertical: props.vertical
        }, [
            rail,
            scale
        ]);
        const output = new Output({}, [
            outputField
        ]);

        const container = new Container({
            vertical: props.vertical
        }, [
            input,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneSliderView;