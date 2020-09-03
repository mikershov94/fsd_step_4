import Component from '../index';

interface TScaleState extends TState {
    vertical: boolean;
}

class Scale extends Component {

    protected state: TScaleState;

    protected initStateComponent(): TScaleState {
        return {
            vertical: this.props.vertical,
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('scale');

        return `<div class="${style}"></div>`;
    }

}

export default Scale