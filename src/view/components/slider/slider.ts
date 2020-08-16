import $ from 'jquery';

import Component from '../index';

class Slider extends Component {

    protected afterMount(): void {
        this.state = {
            position: this.props.position,
        }
    }
    
    protected setTemplate(): string {
        return '<div class="slider"></div>'
    }
}

export default Slider;