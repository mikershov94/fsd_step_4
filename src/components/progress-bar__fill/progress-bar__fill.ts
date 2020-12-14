import Component from '../index';

interface TProgressBarFillState extends TState {
    max: number;
    min: number;
    start: number;
    end: number;
    sizeSlider: number,
    railLengthPx: number,
    prefix: string;
}

abstract class ProgressBarFill extends Component {

    protected state: TProgressBarFillState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected initStateComponent(): TProgressBarFillState {
        return {
            max: this.props.max,
            min: this.props.min,
            start: this.props.start,
            end: this.props.end,
            sizeSlider: this.props.outerSizeSlider,
            railLengthPx: this.props.railLengthPx,
            prefix: this.props.prefix,
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

export default ProgressBarFill;