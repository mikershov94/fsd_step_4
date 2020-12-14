import Component from '../index';

class ControlRail extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected doingAfterRender(): void {
        const length: number = this.state.vertical ? this.jQueryElement.height() : this.jQueryElement.width();
        this.dispatcher.dispatch('calculatedLengthRail', { length })
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return 'control__rail';
    }

}

export default ControlRail;