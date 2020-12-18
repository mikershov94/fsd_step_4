import Component from '../index';

class Control extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected doingAfterRender(): void {
        const offset: number = this.state.vertical ? this.jQueryElement.offset().top : 
                                this.jQueryElement.offset().left;

        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected setStyle(): string {
        return 'fsd-slider__control';
    }

}

export default Control;