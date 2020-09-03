import Component from '../index';

interface TScaleState extends TState {
    vertical: boolean;
}

class Scale extends Component {

    protected state: TScaleState;
    private values: JQuery[];

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
        
        const minValue: JQuery = $('<div class="scale__value"></div>');

        this.values = [ minValue ];
        
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
        this.values.forEach((value: JQuery) => {
            this.jQueryElement.append(value);
        })
    }

}

export default Scale