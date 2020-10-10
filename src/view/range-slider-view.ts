import View from './view';

import Container from '../components/container';
import Input from '../components/input';
import Output from '../components/output';
import Rail from '../components/rail';
import Scale from '../components/scale';
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
            type: 'left',
            vertical: props.vertical
        });
        const sliderB = new Slider({
            position: props.positionB,
            type: 'right',
            vertical: props.vertical
        });
        const progressBar = new ProgressBar({
            positionA: props.positionA,
            positionB: props.positionB,
            type: 'range',
            vertical: props.vertical,
        });
        const scale = new Scale({
            vertical: props.vertical,
        }, [
            progressBar
        ])

        const outputFieldA = new OutputField({
            value: props.positionA,
            type: 'start'
        });
        const outputFieldB = new OutputField({
            value: props.positionB,
            type: 'end'
        });

        const rail = new Rail({
            vertical: props.vertical
        }, [
            sliderA,
            progressBar,
            sliderB
        ]);

        const wrapper = new Input({
            vertical: props.vertical
        }, [
            rail
        ]);
        const output = new Output({}, [
            outputFieldA,
            outputFieldB
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

export default RangeSliderView;