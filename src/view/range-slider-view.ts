import View from './view';

import Container from '../components/container';
import Wrapper from '../components/wrapper';
import Output from '../components/output';
import Rail from '../components/rail';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
import OutputField from '../components/output-field';

class RangeSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const sliderA = new Slider({
            position: props.positionA,
            type: 'left'
        });
        const sliderB = new Slider({
            position: props.positionB,
            type: 'right'
        });
        const progressBar = new ProgressBar({
            positionA: props.positionA,
            positionB: props.positionB,
            type: 'range'
        })

        const outputFieldA = new OutputField({
            value: props.positionA,
            type: 'start'
        });
        const outputFieldB = new OutputField({
            value: props.positionB,
            type: 'end'
        });

        const rail = new Rail({}, [
            sliderA,
            progressBar,
            sliderB
        ]);

        const wrapper = new Wrapper({}, [
            rail
        ]);
        const output = new Output({}, [
            outputFieldA,
            outputFieldB
        ]);
        
        const container = new Container({}, [
            wrapper,
            output
        ]);

        this.adopt(container);
    }
}

export default RangeSliderView;