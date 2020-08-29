import Component from '../index';

import Slider from '../slider';
import ProgressBar from '../progress-bar';

class Rail extends Component {

    protected initStateComponent(): TState {
        return {
            min: this.props.min,
            max: this.props.max
        }
    }

    protected doingRender(): void {
        this.dispatcher.dispatch('railRender', {
            offset: this.jQueryElement.offset().left
        })
    }

    protected setTemplate(): string {
        return '<div class="rail"></div>';
    }

}

export default Rail;