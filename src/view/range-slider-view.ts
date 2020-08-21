/// <reference path="view.d.ts" />
/// <reference path="../interfaces/sliders.d.ts" />

import View from './view';

import Container from '../components/container';
import Wrapper from '../components/wrapper';
import Rail from '../components/rail';
import Slider from '../components/slider';
import ProgressBar from '../components/progress-bar';
import OutputField from '../components/output-field';

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

    mountApplication(props: TMessage): void {
        const sliderA = this.createElement(Slider, {
            position: props.positionA
        });
        const sliderB = this.createElement(Slider, {
            position: props.positionB
        });
        const progressBar = this.createElement(ProgressBar, {
            positionA: props.positionA,
            positionB: props.positionB
        })

        const outputFieldA = this.createElement(OutputField, {
            value: props.positionA
        });
        const outputFieldB = this.createElement(OutputField, {
            value: props.positionB
        });

        const rail = this.createElement(Rail, {}, [
            sliderA,
            progressBar,
            sliderB
        ]);

        const wrapper = this.createElement(Wrapper, {}, [
            rail
        ]);
        const output = this.createElement(Wrapper, {}, [
            outputFieldA,
            outputFieldB
        ]);
        
        const container = this.createElement(Container, {}, [
            wrapper,
            output
        ]);

        this.adopt(container);
    }
}

export default RangeSliderView;