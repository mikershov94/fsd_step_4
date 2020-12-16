import FieldStart from './__field_start';

class FieldStartVertical extends FieldStart {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__field_start_vertical'
    }

}

export default FieldStartVertical;