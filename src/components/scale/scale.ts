import Component from '../index';

interface TScaleState extends TState {
    min: number;
    max: number;
    step: number;
    countStripes: number;
    vertical: boolean;
}

class Scale extends Component {

    protected state: TScaleState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);   
    }

    protected initStateComponent(): TScaleState {
        return {
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
            countStripes: this.props.countStripes,
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('scale');

        return `<div class="${style}"></div>`;
    }

    

    protected doingRender(): void {

        const stripesCount: number = (this.state.max - this.state.min) / this.state.step;

        //рисуем полоски через шаг step
        for (let i: number = 0; i <= stripesCount; i++) {
            let stripe: JQuery;

            if (i % 2 == 0) {
                stripe = $('<div class="scale__stripe"></div>');
            } else {
                stripe = $('<div class="scale__stripe_even"></div>');
            }

            this.jQueryElement.append(stripe)
        }
    }

}

export default Scale