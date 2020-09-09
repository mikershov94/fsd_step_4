/// <reference path="../../types/limits.d.ts" />
import Component from '../index';

class Rail extends Component implements IRailComponent {

    public getLimits(): TLimits {
        const min = this.jQueryElement.offset().left;
        const max = min + this.jQueryElement.width();

        return {
            min,
            max
        }
    }

    protected initStateComponent(): TRailState {
        return {
            min: this.props.min,
            max: this.props.max,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('rail');

        return `<div class="${style}"></div>`;
    }

}

export default Rail;