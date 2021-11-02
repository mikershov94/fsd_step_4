//import { Compilation } from 'webpack';
import SliderStart from './__slider_start';

class SliderStartVertical extends SliderStart {

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
        console.log('pointer: ' + pointer)
        console.log('position: ' + position)
        return position
    }

}

export default SliderStartVertical;