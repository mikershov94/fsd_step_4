import OutputFieldEnd from './output__field_end';

class OutputFieldEndVertical extends OutputFieldEnd {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'output__field_end_vertical';
    }

}

export default OutputFieldEndVertical;