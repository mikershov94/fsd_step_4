interface IDownHandler {
    (e: JQuery.MouseDownEvent): void;
}

interface IMoveHandler {
    (e: JQuery.MouseMoveEvent): void;
}

interface IUpHandler {
    (e: JQuery.MouseUpEvent): void;
}

interface IAloneActions {
    onMouseDown: IDownHandler;
    onMouseMove: IMoveHandler;
    onMouseUp: IUpHandler;
}

interface IRangeActions {
    onMouseDownA: IDownHandler;
    onMouseDownB: IDownHandler;
    onMouseMoveA: IMoveHandler;
    onMouseMoveB: IMoveHandler;
    onMouseUp: IUpHandler;
}

interface IController {
    runPlugin(): void;
}