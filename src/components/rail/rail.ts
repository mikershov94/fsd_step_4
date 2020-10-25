/// <reference path="../../types/limits.d.ts" />
import Component from '../index';

class Rail extends Component {

    protected doingAfterRender(): void {
        const width: number = this.jQueryElement.width();
        const leftLimit: number = 0;
        const rightLimit: number = width;
        
        this.dispatcher.dispatch('calculatedWidthRail', { width })
        this.dispatcher.dispatch('calculatedLimits', { leftLimit, rightLimit });
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