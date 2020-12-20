import Control from './__control';

class ControlVertical extends Control {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__control fsd-slider__control_vertical';
    }

}

export default ControlVertical;