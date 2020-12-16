import Container from './__container';

class ContainerVertical extends Container {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        const prefix: string = this.prefix;
        return prefix + '__container_vertical'
    }

}

export default ContainerVertical;