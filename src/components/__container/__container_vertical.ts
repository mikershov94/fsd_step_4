import Container from './__container';

class ContainerVertical extends Container {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__container_vertical'
    }

}

export default ContainerVertical;