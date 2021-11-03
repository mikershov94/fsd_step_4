import FieldEnd from './__field_end';

class FieldEndVertical extends FieldEnd {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__field fsd-slider__field_end fsd-slider__field_vertical';
    }

}

export default FieldEndVertical;