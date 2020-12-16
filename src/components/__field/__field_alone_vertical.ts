import FieldAlone from './__field_alone';

class FieldAloneVertical extends FieldAlone {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__field_alone_vertical'
    }

}

export default FieldAloneVertical;