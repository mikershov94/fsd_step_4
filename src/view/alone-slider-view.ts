import View from './view';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
import Scale from '../components/scale';
import Rail from '../components/rail';
import OutputField from '../components/output-field';
import Wrapper from '../components/wrapper';
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
        }, [ 
            progressBar
         ]);

        const rail = new Rail({
            min: props.min,
            max: props.max,
            vertical: props.vertical
        }, [
            slider,
            scale
        ]);

        const outputField = new OutputField({
            value: props.position,
        });

        const wrapper = new Wrapper({
            vertical: props.vertical
        }, [
            rail
        ]);
        const output = new Output({}, [
            outputField
        ]);

        const container = new Container({
            vertical: props.vertical
        }, [
            wrapper,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneSliderView;