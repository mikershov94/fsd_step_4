import FieldEnd from './__field_end';

class FieldEndVertical extends FieldEnd {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__field_end_vertical';
    }

}

export default FieldEndVertical;