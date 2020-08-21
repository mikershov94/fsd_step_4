/// <reference path="../interfaces/model.d.ts" />
/// <reference path="../view/view.d.ts" />

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

interface IAloneSliderController {
    model: IAloneSliderModel;
    view: IRangeSliderView;

    actions: IAloneActions;
   
    runPlugin(defaultValues: IConfigPlugin): void;
}

interface IRangeSliderController {
    model: IRangeSliderModel;
    view: IView;

    actions: IRangeActions;

    runPlugin(defaultValues: IConfigPlugin): void;
}

interface IController {
    runPlugin(): void;
}

type PublisherData = DataModel | TDataComponent;