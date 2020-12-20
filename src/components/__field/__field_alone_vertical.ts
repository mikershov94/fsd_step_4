import FieldAlone from './__field_alone';

class FieldAloneVertical extends FieldAlone {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__field fsd-slider__field_alone fsd-slider__field_vertical'
    }

}

export default FieldAloneVertical;