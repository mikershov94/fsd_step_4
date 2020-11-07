/// <reference path="../../types/limits.d.ts" />
import Component from '../index';

class Rail extends Component {

    protected initStateComponent(): TRailState {
        return {
            vertical: this.props.vertical
        }
    }

    protected doingAfterRender(): void {
        const width: number = this.jQueryElement.width();
        this.dispatcher.dispatch('calculatedWidthRail', { width })
    }

    protected setTemplate(): string {
        let style: string = this.setStyle('rail');

        return `<div class="${style}"></div>`;
    }

}

export default Rail;