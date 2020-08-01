/// <reference path="view.d.ts" />
/// <reference path="../interfaces/sliders.d.ts" />

import View from './view';

class RangeSliderView extends View {

    private application: IRangeSlider;

    constructor(rootElement: JQuery) {
        
    }

/*
    private setDefaultPositionA(value: number): void {
        this.application.sliderA.css('left', `${value}px`);
    }

    private setDefaultPositionB(value: number): void {
        this.application.sliderB.css('left', `${value}px`);
    }
/*
    moveSliderA(pageX: number, min: number, posB: number): number {
        console.log(`${pageX}  ${min}  ${posB}`);
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.sliderA.outerWidth();
        
        let left = pageX - offsetWidth / 2 - offset;
        if (left < min) left = min;
        if (left > posB) left = posB;

        this.sliderA.css('left', `${left}px`);
        return left;
    }

    moveSliderB(pageX: number, max: number, posA: number): number {
        const offset = this.wrapper.offset().left;
        const offsetWidth = this.sliderB.outerWidth();

        let left = pageX - offsetWidth / 2 - offset;
        if (left < posA) left = posA;
        if (left > max) left = max;

        this.sliderB.css('left', `${left}px`);
        return left;
    }

    moveFillA(posA: number, posB: number): void {
        this.filling.css('left', `${posA}px`);
        const width = posB - posA;
        this.filling.css('width', `${width}px`);     
    }

    moveFillB(posA: number, posB: number): void {
        const width = posB - posA;
        this.filling.css('width', `${width}px`);
    }
*/
/*
    protected createSlider(): void {
        this.application.sliderA = this.components.slider.mount();
        this.setDefaultPositionA(125);
        this.application.sliderB = this.components.slider.mount();
        this.setDefaultPositionB(375);
        this.application.progressBar = this.components.progressBar.mount();
        this.application.rail = this.components.rail.mount();

        this.application.rail.append(this.application.sliderA);
        this.application.rail.append(this.application.sliderB);
        this.application.rail.append(this.application.progressBar);

        this.application.wrapper = this.components.wrapper.mount();
        this.application.wrapper.append(this.application.rail);

        this.application.outputFieldA = this.components.outputField.mount();
        this.application.outputFieldB = this.components.outputField.mount();

        this.application.output = this.components.wrapper.mount();
        this.application.output.append(this.application.outputFieldA);
        this.application.output.append(this.application.outputFieldB);

        this.application.container = this.components.container.mount();
        this.application.container.append(this.application.wrapper);
        this.application.container.append(this.application.output);

        this.mainContainer = this.application.container;
    }
*/
}

export default RangeSliderView;