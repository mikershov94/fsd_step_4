import View from './view';
import {SliderAloneVertical} from '../components/__slider';
import {FillAloneVertical} from '../components/__fill';
import {ProgressBarVertical} from '../components/__progress-bar';
import {ScaleVertical} from '../components/__scale';
import {RailVertical} from '../components/__rail';
import {FieldAloneVertical} from '../components/__field';
import {ControlVertical} from '../components/__control';
import {OutputVertical} from '../components/__output';
import {ContainerVertical} from '../components/__container';

class AloneVerticalView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
    }

    

    mountApplication(props: TMessage): void {
        const controlSlider = new SliderAloneVertical({
            min: props.min,
            max: props.max,
            value: props.value,
            position: props.position,
            limitA: props.min,
            limitB: props.max,
            size: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        });
        
        const progressBarFill = new FillAloneVertical({
            max: props.max,
            min: props.min,
            start: props.min,
            end: props.value,
            sizeSlider: props.outerSizeSlider,
            railLengthPx: props.lengthRail,
        }, []);

        const progressBar = new ProgressBarVertical({
            prefix: this.rootContainerClass,
        }, [
            progressBarFill,
        ])
    
        const scale = new ScaleVertical({
            prefix: this.rootContainerClass,
            min: props.min,
            max: props.max,
            step: props.step
        }, []);

        const controlRail = new RailVertical({
            min: props.min,
            max: props.max,
        }, [
            controlSlider,
            progressBar
        ]);

        const outputField = new FieldAloneVertical({
            value: props.value,
        }, []);

        const control = new ControlVertical({
            prefix: this.rootContainerClass,
        }, [
            controlRail,
            scale
        ]);
        const output = new OutputVertical({
            prefix: this.rootContainerClass,
        }, [
            outputField
        ]);

        const container = new ContainerVertical({
            prefix: this.rootContainerClass,
        }, [
            control,
            output
        ]);

        this.adopt(container);
    }
    
}
export default AloneVerticalView;