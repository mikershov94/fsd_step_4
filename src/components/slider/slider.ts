import Component from '../index';

interface TSliderState extends TState {
    position: number;
    type: string;
}

interface TOldPosition extends TActionArgs {
    posPointer: number;
    posSlider: number;
    outerWidth: number;
}

class Slider extends Component {

    protected state: TSliderState;

    private onMouseDown: TDownHandler;

    constructor(props: TMessage, children: IComponent[] = []) {
        super(props, children);

        this.onMouseDown = (event: JQuery.MouseDownEvent) => {
            console.log('down');

            const oldPosition: TOldPosition = {
                posPointer: event.pageX,
                posSlider: this.state.position,
                outerWidth: this.jQueryElement.outerWidth()
            }

            switch (this.state.type) {
                case 'left':
                    this.dispatcher.dispatch('mouseDownA', oldPosition);
                    return

                case 'right':
                    this.dispatcher.dispatch('mouseDownB', oldPosition);
                    return

                default:
                    this.dispatcher.dispatch('mouseDown', oldPosition);
                    return

            }
        }

    }

    protected initStateComponent(): TSliderState {
        return {
            position: this.props.position,
            type: this.props.type
        }
    }

    protected setTemplate(): string {
        return '<div class="slider"></div>';
    }

    protected doingRender(): void {
        this.jQueryElement.css('left', `${this.state.position}px`);
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
        this.jQueryElement.css('left', `${this.state.position}px`)
    }

}

export default Slider;