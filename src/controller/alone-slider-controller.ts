/// <reference path="controller.d.ts" />
/// <reference path="../view/view.d.ts" />
/// <reference path="../interfaces/model.d.ts" />

class SliderController {
    public model: IAloneSliderModel;
    public view: any;

    public onMouseDown: IDownHandler;
    public onMouseMove: IMoveHandler;
    public onMouseUp: IUpHandler;

    constructor(model: IAloneSliderModel, view: IAloneSliderView) {
        this.model = model;
        this.view = view;

        this.onMouseDown = (e: JQuery.MouseDownEvent) => {      
            this.view.subscribeOnMouseMove();
            this.view.subscribeOnMouseUp();
        }

        this.onMouseMove = (e: JQuery.MouseMoveEvent) => {
            let position = this.view.moveSlider(e.pageX, this.model.minLimit, this.model.maxLimit);
            this.view.moveFill(position);
            this.model.setPosition(Math.floor(position));
            this.view.outputField.val(this.model.getPosition());
        }
    
        this.onMouseUp = (e: JQuery.MouseUpEvent) => {
            this.view.unsubscribeMouseMove();
        }

    }

    runPlugin(defaultValues: IConfigPlugin): void {
        this.model.setPosition(defaultValues.defaultPosition)
        this.view.render(this.model.getPosition());
        this.view.initObserver(this.onMouseDown, this.onMouseMove, this.onMouseUp);
    }

};

export default SliderController;