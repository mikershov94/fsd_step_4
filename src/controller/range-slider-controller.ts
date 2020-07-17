/// <reference path="controller.d.ts" />
/// <reference path="../model/model.d.ts" />
/// <reference path="../view/view.d.ts" />

class RangeSliderController implements IRangeSliderController {
    public model: IRangeSliderModel;
    public view: IRangeSliderView;

    constructor(model: IRangeSliderModel, view: IRangeSliderView) {
        this.model = model;
        this.view = view;
    }

    onMouseDown(e: JQuery.MouseDownEvent): void {
        this.view.subscribeOnMouseMove();
        this.view.subscribeOnMouseUp();
    }

    onMouseMove(e: JQuery.MouseMoveEvent): void {
        console.log('двиг')
    }

    onMouseUp(e: JQuery.MouseUpEvent): void {
        this.view.unsubscribeMouseMove();
    }

    runPlugin(defaultValues: any): void {
        this.view.render(defaultValues.defaultPositionA, defaultValues.defaultPositionB);
        this.view.initObserver(this.onMouseDown,
                               this.onMouseMove,
                               this.onMouseUp);
    }
}

export default RangeSliderController;