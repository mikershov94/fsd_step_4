import Component from '../index';

interface TControlRailState extends TState {
    vertical: boolean
}

class ControlRail extends Component {

    protected state: TControlRailState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TControlRailState {
        return {
            vertical: this.props.vertical
        }
    }

    protected doingAfterRender(): void {
        const length: number = this.state.vertical ? this.jQueryElement.height() : this.jQueryElement.width();
        this.dispatcher.dispatch('calculatedLengthRail', { length })
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('control__rail');

        return `<div class="${style}"></div>`;
    }

}

export default ControlRail;