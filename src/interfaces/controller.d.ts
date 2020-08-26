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