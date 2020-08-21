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
    update(message: TMessage): void;
}

interface IComponentController extends IController {
    mount(data: TMessage): JQuery;
}

interface IMainController extends IController {
    runPlugin(): void;
}