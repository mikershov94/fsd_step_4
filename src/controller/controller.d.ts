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

interface IAloneSliderController {
    model: IAloneSliderModel;
    view: ISliderView;

    onMouseDown: IDownHandler;
    onMouseMove: IMoveHandler;
    onMouseUp: IUpHandler;
   
    runPlugin(defaultValues: any): void;
}

interface IRangeSliderController {
    model: IRangeSliderModel;
    view: IRangeSliderView;

    runPlugin(defaultValues: any): void;
}