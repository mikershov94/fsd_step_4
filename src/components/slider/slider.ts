import $ from 'jquery';

import Component from '../index';
import { ViewComponent } from '../../view';

interface TSliderState extends TState {
    position: number;
    offset?: number;
}

class Slider extends Component {

    protected initStateComponent(): TSliderState {
        return {
            position: this.props.position,
        }
    }

    protected setTemplate(): string {
        return '<div class="slider"></div>';
    }

}

class ViewSlider extends ViewComponent {

    protected doingRender(data: TMessage): void {
        this.jQueryElement.css('left', `${data.position}px`)
    }

}

/*

class Slider extends Component {

    protected state: TSliderState;

    private mouseDownHandler: IDownHandler;
    private mouseMoveHandler: IMoveHandler;
    private mouseUpHandler:   IUpHandler;

    constructor() {
        super();

        this.mouseDownHandler = (e: JQuery.MouseDownEvent) => {
            this.parentView.page.on('mousemove', this.mouseMoveHandler);
        };

        this.mouseMoveHandler = (e: JQuery.MouseMoveEvent) => {
            this.parentView.page.on('mouseup', this.mouseUpHandler);
            this.onMove()
        }

        this.mouseUpHandler = (e: JQuery.MouseUpEvent) => {
            this.parentView.page.off('mousemove');
        }
    }

    private onMove(pageX: number, minLimit: number, maxLimit: number): void {
        const offset = this.state.offset;
        const widthOffset = this.jQueryElement.outerWidth();

        let left = pageX - widthOffset / 2 - offset;
        if (left < minLimit) left = minLimit;
        if (left > maxLimit) left = maxLimit;
    }

    protected afterMount(): void {
        this.state = {
            position: this.props.position,
        }
    }

    protected updateState(): void {
        this.setState(this.props);
    }

    protected doingRender(): void {
        this.jQueryElement.css('left', `${this.state.position}px`);
    }

    protected subscribeOnEvents(): void {
        this.jQueryElement.on('mousedown', this.mouseDownHandler);
    }
    
    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}
*/

export default Slider;