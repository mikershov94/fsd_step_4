import View from './view';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
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
            position: props.position,
            type: 'alone',
            vertical: props.vertical
        });
        const progressBar = new ProgressBar({
            positionA: 0,
            positionB: props.position,
            vertical: props.vertical,
        })
        const scale = new Scale({
            vertical: props.vertical,
        }, []);

        const rail = new Rail({
            min: props.min,
            max: props.max,
            vertical: props.vertical
        }, [
            slider,
            progressBar
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