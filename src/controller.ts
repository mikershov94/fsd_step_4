class SliderController {
    public model: any;
    public view: any;

    constructor(model: any, view: any) {
        this.model = model;
        this.view = view;

        this.view.bindHandlerDown(this.onMouseDownSlider);
    }

    onMouseDownSlider(e: object): void {
        this.view.bindHandlerMove(this.onMoveSlider);
    }

    onMoveSlider(e: object): void {
        this.model.setPosition(25);
    }

    onMouseUpSlider(e: object): void {
        this.view.unbindHandlerUp()
    }



};

export default SliderController;