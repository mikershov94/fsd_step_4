import OutputFieldAlone from './output__field_alone';

class OutputFieldAloneVertical extends OutputFieldAlone {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'output__field_alone_vertical'
    }

}

export default OutputFieldAloneVertical;