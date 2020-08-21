import $ from 'jquery';

import Component from '../index';

import Slider from '../slider';
import ProgressBar from '../progress-bar';

class Rail extends Component {

    afterMount(): void {
        this.state = {
            min: this.props.min,
            max: this.props.max
        }

    }

    protected setTemplate(): string {
        return '<div class="rail"></div>';
    }

}

export default Rail;