import OutputField from './output__field';

class OutputFieldEnd extends OutputField {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'output__field_end'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.valueB
        });

    }

}

export default OutputFieldEnd;