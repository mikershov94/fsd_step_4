import ControlRail from './control__rail';

class ControlRailVertical extends ControlRail {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__rail_vertical';
    }
}

export default ControlRailVertical;