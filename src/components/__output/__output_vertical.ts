import Output from './__output';

class OutputVertical extends Output {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return this.prefix + '__output_vertical';
    }

}

export default OutputVertical;