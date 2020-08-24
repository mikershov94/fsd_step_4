interface IDownHandler {
    (e: JQuery.MouseDownEvent): void;
}

interface IMoveHandler {
    (e: JQuery.MouseMoveEvent): void;
}

interface IUpHandler {
    (e: JQuery.MouseUpEvent): void;
}

interface IController {
    init(): void;
}

interface IComponentController extends IController {
    init(): JQuery;
    mount(data: TMessage): void;
    mountParent(parent: IComponent): void;
}