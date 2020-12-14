import OutputField from './output__field';

class OutputFieldStart extends OutputField {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'output__field_start'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.valueA
        });

    }

}

export default OutputFieldStart;