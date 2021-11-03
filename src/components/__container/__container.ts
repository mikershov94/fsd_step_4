import Component from '../index';

class Container extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
        
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`
    }

    protected setStyle(): string {
        return 'fsd-slider__container';
    }

}

export default Container;