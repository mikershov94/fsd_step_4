import Component from '../index';

interface TSliderState extends TState {
    position: number;
    type: string;
    vertical: boolean;
}

class Slider extends Component {

    protected state: TSliderState;

    private onMouseDown: TDownHandler;

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {

            switch (this.state.type) {
                case 'left':
                    this.dispatcher.dispatch('mouseDownA', {});
                    return

                case 'right':
                    this.dispatcher.dispatch('mouseDownB', {});
                    return

                default:
                    this.dispatcher.dispatch('mouseDown', {});
                    return

            }
        }

    }

    protected initStateComponent(): TSliderState {
        return {
            position: this.props.position,
            type: this.props.type,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('slider');

        return `<div class="${style}"></div>`;
    }

    protected doingRender(): void {
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}px`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}px`);
    }

    protected doingAfterRender(): void {
        const outerSize: number = this.jQueryElement.outerWidth();
        this.dispatcher.dispatch('calculatedOuterSizeSlider', { outerSize })
    }

    protected subscribeOnEvent(): void {
        this.jQueryElement.on('mousedown', this.onMouseDown)
    }

    protected updateState(): void {
        switch (this.state.type) {
            
            case 'left':
                this.setState({
                    position: this.props.positionA,
                })
                return;

            case 'right':
                this.setState({
                    position: this.props.positionB,
                })
                return;

            default:
                this.setState({
                    position: this.props.position,
                })
                return;

        }    
    }

    protected updateRender(): void {
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}px`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}px`)
    }

}

export default Slider;