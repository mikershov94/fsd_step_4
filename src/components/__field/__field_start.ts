import Field from './__field';

class FieldStart extends Field {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__field_start'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.valueA
        });

    }

}

export default FieldStart;