import FieldStart from './__field_start';

class FieldStartVertical extends FieldStart {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__field fsd-slider__field_start fsd-slider__field_vertical'
    }

}

export default FieldStartVertical;