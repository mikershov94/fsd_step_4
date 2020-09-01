import Component from '../index';

interface TRailState extends TState {
    min: number,
    max: number,
    vertical: boolean
}

class Rail extends Component {

    protected initStateComponent(): TRailState {
        return {
            min: this.props.min,
            max: this.props.max,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('rail');

        return `<div class="${style}"></div>`;
    }

}

export default Rail;