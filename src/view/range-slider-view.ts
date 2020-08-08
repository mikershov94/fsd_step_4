/// <reference path="view.d.ts" />
/// <reference path="../interfaces/sliders.d.ts" />

import View from './view';

import Container from './components/container';
import Wrapper from './components/wrapper';
import Rail from './components/rail';
import Slider from './components/slider';
import ProgressBar from './components/progress-bar';
import OutputField from './components/output-field';

class RangeSliderView extends View {

    constructor(rootElement: JQuery) {
        super(rootElement);
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
    protected mountApplication(): void {
        let sliderA = new Slider({});
        let sliderB = new Slider({});
        let progressBar = new ProgressBar({});
        let rail = new Rail({});
        rail.adopt(sliderA);
        rail.adopt(sliderB);
        rail.adopt(progressBar);

        let outputFieldA = new OutputField({});
        let outputFieldB = new OutputField({});

        let wrapper = new Wrapper({});
        wrapper.adopt(rail);
        let output = new Wrapper({});
        output.adopt(outputFieldA);
        output.adopt(outputFieldB);

        let container = new Container({
            state: {},
            parent: this
        })
        container.adopt(wrapper);
        container.adopt(output);

        this.rootComponent = container
    }
}

export default RangeSliderView;