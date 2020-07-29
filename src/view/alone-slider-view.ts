/// <reference path="view.d.ts" />

import View from './view';

class AloneSliderView extends View {

    private application: IAloneSlider;

    private setSliderDefaultPosition(value: number): void {
        this.application.slider.css('left', `${value}px`);
    }
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

    protected createSlider(): void {
        this.application.slider = this.components.slider.mount();
        this.setSliderDefaultPosition(250);
        this.application.progressBar = this.components.slider.mount();
        this.application.rail = this.components.rail.mount();
        
        this.application.rail.append(this.application.slider);
        this.application.rail.append(this.application.progressBar);

        this.application.outputField = this.components.outputField.mount();
        this.application.output = this.components.wrapper.mount();

        this.application.output.append(this.application.outputField);

        this.application.container = this.components.container.mount();
        this.application.container.append(this.application.wrapper);
        this.application.container.append(this.application.output);
    }
    
}
export default AloneSliderView;