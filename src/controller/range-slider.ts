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

    runPlugin(): void {
        this.view.render();
        this.view.initObserver();
    }
}

export default RangeSliderController;