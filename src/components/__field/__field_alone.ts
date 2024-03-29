import Field from './__field';

class FieldAlone extends Field {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__field fsd-slider__field_alone'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.value
        });

    }

}

export default FieldAlone;