import Field from './__field';

class FieldEnd extends Field {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__field_end'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.valueB
        });

    }

}

export default FieldEnd;