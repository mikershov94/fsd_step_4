import OutputField from './output__field';

class OutputFieldAlone extends OutputField {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'output__field_alone'
    }

    protected updateState(): void {
        this.setState({
            value: this.props.value
        });

    }

}

export default OutputFieldAlone;