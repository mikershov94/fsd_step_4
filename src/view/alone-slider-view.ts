/// <reference path="view.d.ts" />

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
/*
    private setSliderDefaultPosition(value: number): void {
        this.application.slider.css('left', `${value}px`);
    }
    */
/*
    moveFill(position: number): void {
        this.filling.css('left', `0px`);
        this.filling.css('width', `${position}px`);
    }

    moveSlider(pageX: number, minLimit: number, maxLimit: number): number {
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.slider.outerWidth();
        
        let left = pageX - offsetWidth / 2 - offset;
        if (left < minLimit) left = minLimit;
        if (left > maxLimit) left = maxLimit;

        this.slider.css('left', `${left}px`);
        return left;
    }
*/

    mountApplication(props: TMessage): void {
        const slider = new Slider({
            position: props.position,
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