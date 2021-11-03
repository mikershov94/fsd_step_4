import Component from '../index';

interface TFillState extends TState {
    max: number;
    min: number;
    start: number;
    end: number;
    sizeSlider: number,
    railLengthPx: number,
}

abstract class Fill extends Component {

    protected state: TFillState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TFillState {
        return {
            max: this.props.max,
            min: this.props.min,
            start: this.props.start,
            end: this.props.end,
            sizeSlider: this.props.outerSizeSlider,
            railLengthPx: this.props.railLengthPx,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return '';
    }

}

export default Fill;