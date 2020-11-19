import Component from '../index';

interface TScaleState extends TState {
    min: number;
    max: number;
    step: number;
    countStripes: number;
    vertical: boolean;
    prefix: string;
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
            prefix: this.props.prefix,
        }
    }

    protected setTemplate(): string {
        const prefix: string = this.state.prefix;
        const style: string = this.setStyle(prefix + '__scale');

        return `<div class="${style}"></div>`;
    }

    

    protected doingRender(): void {

        const stripesCount: number = (this.state.max - this.state.min) / this.state.step;

        //рисуем полоски через шаг step
        for (let i: number = 0; i <= stripesCount; i++) {
            let stripe: JQuery;
            //let styleVertical: string = 'scale__stripe_vertical'

            if (i % 2 == 0) {
                stripe = this.state.vertical ?
                $(`<div class="scale__stripe_width_full scale__stripe_height_null"></div>`) :
                $(`<div class="scale__stripe_width_null scale__stripe_height_full"></div>`);
            } else {
                stripe = this.state.vertical ? 
                $(`<div class="scale__stripe_width_short scale__stripe_height_null"></div>`) :
                $(`<div class="scale__stripe_width_null scale__stripe_height_short"></div>`);
            }
            
            this.jQueryElement.append(stripe)
        }
    }

}

export default Scale