import Component from '../index';

class Rail extends Component {

    protected initStateComponent(): TState {
        return {
            min: this.props.min,
            max: this.props.max
        }
    }

    protected setTemplate(): string {
        return '<div class="rail rail_vertical"></div>';
    }

}

export default Rail;