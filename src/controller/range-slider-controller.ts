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

    runPlugin(defaultValues: any): void {
        this.view.render(defaultValues.defaultPositionA, defaultValues.defaultPositionB);
        this.view.initObserver();
    }
}

export default RangeSliderController;