import $ from 'jquery';

import Component from '../index';

class ProgressBar extends Component {

    afterMount(): void {
        this.state = {
            position: this.props.position,
        }
    }

    protected setTemplate(): string {
        return '<div class="progress-bar"></div>';
    }
}

export default ProgressBar;