import Rail from './__rail';

class RailVertical extends Rail {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__rail_vertical';
    }
}

export default RailVertical;