import View from './view';

import Container from '../components/container';
import Control from '../components/control';
import Output from '../components/output';
import ControlRail from '../components/control__rail';
import Scale from '../components/scale';
import ControlSlider from '../components/control__slider';
import ProgressBarFill from '../components/progress-bar__fill';
import OutputField from '../components/output__field';

class RangeSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    mountApplication(props: TMessage): void {
        const sliderA = new ControlSlider({
            position: props.positionA,
            type: 'left',
            vertical: props.vertical
        });
        const sliderB = new ControlSlider({
            position: props.positionB,
            type: 'right',
            vertical: props.vertical
        });
        const progressBarFill = new ProgressBarFill({
            positionA: props.positionA,
            positionB: props.positionB,
            type: 'range',
            vertical: props.vertical,
        });
        const scale = new Scale({
            vertical: props.vertical,
        }, [
            progressBarFill
        ])

        const outputFieldA = new OutputField({
            value: props.positionA,
            type: 'start'
        });
        const outputFieldB = new OutputField({
            value: props.positionB,
            type: 'end'
        });

        const controlRail = new ControlRail({
            vertical: props.vertical
        }, [
            sliderA,
            progressBarFill,
            sliderB
        ]);

        const control = new Control({
            vertical: props.vertical
        }, [
            controlRail
        ]);
        const output = new Output({}, [
            outputFieldA,
            outputFieldB
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

export default RangeSliderView;