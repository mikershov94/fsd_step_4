import Component from '../index';

interface TScaleState extends TState {
    vertical: boolean;
}

class Scale extends Component {

    protected state: TScaleState;

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
        
        
    }

    protected initStateComponent(): TScaleState {
        return {
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('scale');

        return `<div class="${style}"></div>`;
    }

    

    protected doingRender(): void {
        const lengthScale = 500
        const steps = lengthScale / 10;

        for (let i: number = 0; i <= steps; i++) {
            let stripe: JQuery;
            if (i % 2 == 0) {
                stripe = $('<div class="scale__value"></div>');
            } else {
                stripe = $('<div class="scale__value_even"></div>');
            }
            //stripe = $('<div class="scale__value"></div>');
            //stripe.text('|');
            stripe.css('left', `${i * 10}px`) 

            this.jQueryElement.append(stripe)
        }
    }

}

export default Scale