class SliderController {
    public model: any;
    public view: any;

    constructor(model: any, view: any) {
        this.model = model;
        this.view = view;

        this.view.subscribeOnMouseDown(this.onMouseDownSlider);
    }

    onMouseDownSlider(e: object): void {
        this.view.subscribeOnMouseMove(this.onMoveSlider);
    }

    onMoveSlider(e: object): void {
        const railPosition = this.view.getRailPosition();
        const sliderPosition = this.view.getSliderPosition();
        const sliderRelativeRail = sliderPosition - railPosition;

        this.model.setPosition(25);
    }

    onMouseUpSlider(e: object): void {
        this.view.subscribeOnMouseUp(this.onMoveSlider);
    }



};

export default SliderController;