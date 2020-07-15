/// <reference path="../model/model.d.ts" />
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

interface ISliderController {
    model: ISliderModel;
    view: ISliderView;

    onMouseDown: IDownHandler;
    onMouseMove: IMoveHandler;
    onMouseUp: IUpHandler;
   
    runPlugin(): void;
}