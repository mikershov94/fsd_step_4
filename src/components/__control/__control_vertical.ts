import Control from './__control';

class ControlVertical extends Control {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__control_vertical';
    }

}

export default ControlVertical;