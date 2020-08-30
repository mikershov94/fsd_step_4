import View from './view';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
import Rail from '../components/rail';
import OutputField from '../components/output-field';
import Wrapper from '../components/wrapper';
import Container from '../components/container';

class AloneSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const slider = new Slider({
            position: props.position,
            type: 'alone'
        });
        const progressBar = new ProgressBar({
            positionA: 0,
            positionB: props.position
        });

        const rail = new Rail({
            min: props.min,
            max: props.max
        }, [
            slider,
            progressBar
        ]);

        const outputField = new OutputField({
            value: props.position,
        });

        const wrapper = new Wrapper({}, [
            rail
        ]);
        const output = new Wrapper({}, [
            outputField
        ]);

        const container = new Container({}, [
            wrapper,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneSliderView;