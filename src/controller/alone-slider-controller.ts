/// <reference path="controller.d.ts" />
/// <reference path="../view/view.d.ts" />
/// <reference path="../model/model.d.ts" />

class SliderController implements IAloneSliderController{
    public model: IAloneSliderModel;
    public view: ISliderView;

    public onMouseDown: IDownHandler;
    public onMouseMove: IMoveHandler;
    public onMouseUp: IUpHandler;

    constructor(model: IAloneSliderModel, view: ISliderView) {
        this.model = model;
        this.view = view;

        this.onMouseDown = (e: JQuery.MouseDownEvent) => {      
            this.view.subscribeOnMouseMove();
            this.view.subscribeOnMouseUp();
        }

        this.onMouseMove = (e: JQuery.MouseMoveEvent) => {
            let position = this.view.moveSlider(e.pageX, this.model.minLimit, this.model.maxLimit);
            this.model.setPosition(Math.floor(position));
            this.view.outputField.val(this.model.getPosition());
        }
    
        this.onMouseUp = (e: JQuery.MouseUpEvent) => {
            this.view.unsubscribeMouseMove();
        }

    }

    runPlugin(): void {
        this.view.render();
        this.view.initObserver(this.onMouseDown, this.onMouseMove, this.onMouseUp);
    }

};

export default SliderController;