import View from './view';
import {ControlSliderAlone} from '../components/__slider';
import {ProgressBarFillAlone} from '../components/__fill';
import {ProgressBar} from '../components/__progress-bar';
import {Scale} from '../components/__scale';
import {ControlRail} from '../components/__rail';
import {OutputFieldAlone} from '../components/__field';
import {Control} from '../components/__control';
import {Output} from '../components/__output';
import {Container} from '../components/__container';

class AloneView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    

    mountApplication(props: TMessage): void {
        const controlSlider = new ControlSliderAlone({
            min: props.min,
            max: props.max,
            value: props.value,
            position: props.position,
            limitA: props.min,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        });
        
        const progressBarFill = new ProgressBarFillAlone({
            max: props.max,
            min: props.min,
            start: props.min,
            end: props.value,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const progressBar = new ProgressBar({
            prefix: this.rootContainerClass,
        }, [
            progressBarFill,
        ])
    
        const scale = new Scale({
            prefix: this.rootContainerClass,
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const controlRail = new ControlRail({
            min: props.min,
            max: props.max,
        }, [
            controlSlider,
            progressBar
        ]);

        const outputField = new OutputFieldAlone({
            value: props.value,
        }, []);

        const control = new Control({
            prefix: this.rootContainerClass,
        }, [
            controlRail,
            scale
        ]);
        const output = new Output({
            prefix: this.rootContainerClass,
        }, [
            outputField
        ]);

        const container = new Container({
            prefix: this.rootContainerClass,
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneView;