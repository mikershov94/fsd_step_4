/// <reference path="../../types/limits.d.ts" />
import Component from '../index';

class Rail extends Component implements IRailComponent {

    public getLimits(): TLimits {
        const min = 0;
        const max = this.jQueryElement.width();

        return {
            min,
            max
        }
    }

    protected initStateComponent(): TRailState {
        return {
            //min: this.props.min,
            //max: this.props.max,
            vertical: this.props.vertical
        }
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('rail');

        return `<div class="${style}"></div>`;
    }

}

export default Rail;