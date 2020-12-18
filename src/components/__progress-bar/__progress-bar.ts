import Component from "..";

class ProgressBar extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }


    protected setTemplate(): string {
        const style: string = this.setStyle();
        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return 'fsd-slider__progress-bar'
    }

}

export default ProgressBar;