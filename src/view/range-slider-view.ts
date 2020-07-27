/// <reference path="view.d.ts" />
/// <reference path="../interfaces/sliders.d.ts" />

import $ from 'jquery';

import Container from './components/container';
import Wrapper from './components/wrapper';
import Rail from './components/rail';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import OutputField from './components/output-field';

class RangeSliderView {

    public page: JQuery<Document>;
    
    private rootElement: JQuery;
    private sliderApp: JQuery;

    private components: TComponentList;

    constructor(rootElement: JQuery) {
        this.page = $(document);
        this.rootElement = rootElement;

        this.components = {
            container: new Container(),
            wrapper: new Wrapper(),
            rail: new Rail(),
            slider: new Slider(),
            progressBar: new ProgressBar(),
            outputField: new OutputField(),
        }
    }
/*
    private setADefaultPosition(value: number): void {
        this.sliderA.css('left', `${value}px`);
    }

    private setBDefaultPosition(value: number): void {
        this.sliderB.css('left', `${value}px`);
    }

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
    private createSlider(): JQuery {
        const sliderA = this.components.slider.mount();
        const sliderB = this.components.slider.mount();
        const progressBar = this.components.progressBar.mount();
        const rail = this.components.rail.mount();

        rail.append(sliderA);
        rail.append(sliderB);
        rail.append(progressBar);

        const wrapper = this.components.wrapper.mount();
        wrapper.append(rail);

        const outputFieldA = this.components.outputField.mount();
        const outputFieldB = this.components.outputField.mount();

        const output = this.components.wrapper.mount();
        output.append(outputFieldA);
        output.append(outputFieldB);

        const container = this.components.container.mount();
        container.append(wrapper);
        container.append(output);

        return container;
    }

    mount(): void {
        this.sliderApp = this.createSlider();
    }

    render(): JQuery {
        this.sliderApp.appendTo(this.rootElement);
        return this.sliderApp;
    }
}

export default RangeSliderView;