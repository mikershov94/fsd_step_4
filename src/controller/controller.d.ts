/// <reference path="../model/model.d.ts" />
/// <reference path="../view/view.d.ts" />

interface ISliderController {
    model: ISliderModel;
    view: ISliderView;

    onMouseDown(e: JQueryEventObject): void;
    onMouseMove(e: JQueryEventObject): void;
    onMouseUp(e: JQueryEventObject): void;
    
    runPlugin(): void;
}