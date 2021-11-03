import SliderEnd from './__slider_end';

class SliderEndVertical extends SliderEnd {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected doingRender(): void {
        this.setPosition();
        this.jQueryElement.css('top', `${this.state.position}px`);
    }

    protected getOuter(): number {
        return this.jQueryElement.outerHeight();
    }

    protected updateRender(): void {
        this.jQueryElement.css('top', `${this.state.position}px`);
    }


    protected calculatePosition(min: number, max: number, pointer: number): number {
        let position: number = pointer;
        return position
    }

}

export default SliderEndVertical;