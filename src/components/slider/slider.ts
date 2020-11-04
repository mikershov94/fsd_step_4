import { contains } from 'jquery';
import Component from '../index';

interface TSliderState extends TState {
    min: number;
    max: number;
    value: number;
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
            min: this.props.min,
            max: this.props.max,
            value: this.props.value,
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
        const min: number = this.state.min;
        const max: number = this.state.max;
        const value: number = this.state.value;

        let position: number = this.calculatePosition(min, max, value);
        this.setState({position});
        
        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}%`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}%`);
    }

    protected doingAfterRender(): void {
        this.dispatcher.dispatch('calculatedPosition', { position: this.state.position })

        const outerSize: number = this.jQueryElement.outerWidth();
        this.dispatcher.dispatch('calculatedOuterSizeSlider', { outerSize })
    }

    protected beee(): void {
        this.dispatcher.dispatch('calculatedPosition', { position: this.state.position })
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
        const min: number = this.state.min;
        const max: number = this.state.max;
        const value: number = this.state.value;

        let position: number = this.calculatePosition(min, max, value);
        this.setState({position});

        if (this.state.vertical) {
            this.jQueryElement.css('top', `${this.state.position}%`);
            return;
        }

        this.jQueryElement.css('left', `${this.state.position}%`)

    }

    protected calculatePosition(min: number, max: number, value: number): number {
        let position: number = (value * 100) / (max - min);

        return position
    }

}

export default Slider;