import Output from './__output';

class OutputVertical extends Output {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        return prefix + '__output_vertical';
    }

}

export default OutputVertical;