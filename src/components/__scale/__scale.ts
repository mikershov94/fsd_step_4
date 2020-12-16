import Component from '../index';

interface TScaleState extends TState {
    min: number;
    max: number;
    step: number;
    countStripes: number;
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
        }
    }

    protected setTemplate(): string {
        const style: string = this.setStyle();
        return `<div class="${style}"></div>`;
    }

    protected setStyle(): string {
        return this.prefix + '__scale';
    }

    protected doingRender(): void {

        const stripesCount: number = (this.state.max - this.state.min) / this.state.step;
        //рисуем полоски через шаг step
        for (let i: number = 0; i <= stripesCount; i++) {
            let stripe: JQuery;

            if (i % 2 == 0) {
                stripe = $(`<div class="scale__stripe_width_null scale__stripe_height_full"></div>`);
            } else {
                stripe = $(`<div class="scale__stripe_width_null scale__stripe_height_short"></div>`);
            }
            
            this.jQueryElement.append(stripe)
        }
    }

}

export default Scale;