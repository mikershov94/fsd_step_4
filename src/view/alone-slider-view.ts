/// <reference path="view.d.ts" />

import View from './view';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import Rail from './components/rail';
import OutputField from './components/output-field';
import Wrapper from './components/wrapper';

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

    protected mountApplication(): void {
        let slider = new Slider({});
        let progressBar = new ProgressBar({});
        let rail = new Rail({});
        rail.adopt(slider);
        rail.adopt(progressBar);

        let outputField = new OutputField({});
        
        let wrapper = new Wrapper({});
        wrapper.adopt(rail);
        let output = new Wrapper({});
        output.adopt(outputField);

        this.rootComponent.adopt(wrapper);
        this.rootComponent.adopt(output);
    }
    
}
export default AloneSliderView;