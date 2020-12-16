import OutputFieldStart from './output__field_start';

class OutputFieldStartVertical extends OutputFieldStart {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__field_start_vertical'
    }

}

export default OutputFieldStartVertical;