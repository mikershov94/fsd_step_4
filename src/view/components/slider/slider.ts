import $ from 'jquery';

import Component from '../index';

interface TSliderState extends TState {
    position: number;
}

class Slider extends Component {

    protected state: TSliderState;

    protected afterMount(): void {
        this.state = {
            position: this.props.position,
        }
    }

    protected setParameters(): void {
        this.jQueryElement.css('left', `${this.state.position}px`);
    }
    
    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}

export default Slider;