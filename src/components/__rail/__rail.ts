import Component from '../index';

class Rail extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected doingAfterRender(): void {
        const length: number = this.jQueryElement.width();
        this.dispatcher.dispatch('calculatedLengthRail', { length })
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return 'fsd-slider__rail';
    }

}

export default Rail;