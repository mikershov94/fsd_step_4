import Component from '../index';

interface TControlRailState extends TState {
    vertical: boolean
}

class ControlRail extends Component {

    protected initStateComponent(): TControlRailState {
        return {
            vertical: this.props.vertical
        }
    }

    protected doingAfterRender(): void {
        const width: number = this.jQueryElement.width();
        this.dispatcher.dispatch('calculatedWidthRail', { width })
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('control__rail');

        return `<div class="${style}"></div>`;
    }

}

export default ControlRail;