import Rail from './__rail';

class RailVertical extends Rail {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected doingAfterRender(): void {
        const length: number = this.jQueryElement.height();
        this.dispatcher.dispatch('calculatedLengthRail', { length })
    }

    protected setStyle(): string {
        return 'fsd-slider__rail fsd-slider__rail_vertical';
    }
}

export default RailVertical;