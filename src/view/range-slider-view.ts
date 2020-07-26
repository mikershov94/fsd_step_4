/// <reference path="view.d.ts" />

import $ from 'jquery'

class RangeSliderView {

    public page: JQuery<Document>;
    
    private rootElement: JQuery;

    constructor(rootElement: JQuery) {
        this.page = $(document);
        this.rootElement = rootElement;

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
    mount(plugin: TAppContainer): JQuery {
        
    }

    render(): JQuery {
        this.container.appendTo(this.rootElement);
        this.wrapper.appendTo(this.container);
        this.output.appendTo(this.container);
        this.wrapper.append(this.rail);
        this.wrapper.append(this.sliderA);
        this.setADefaultPosition(defaultPosA);
        this.wrapper.append(this.sliderB);
        this.setBDefaultPosition(defaultPosB);
        this.wrapper.append(this.filling);
        this.moveFillA(defaultPosA, defaultPosB);
        this.moveFillB(defaultPosA, defaultPosB);
        this.output.append(this.outputFieldA);
        this.outputFieldA.val(defaultPosA);
        this.output.append(this.outputFieldB);
        this.outputFieldB.val(defaultPosB);
        return this.plugin;
    }
}

export default RangeSliderView;