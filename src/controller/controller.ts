/// <reference path="controller.d.ts" />

class SliderController implements ISliderController{
    public model: ISliderModel;
    public view: ISliderView;

    constructor(model: ISliderModel, view: ISliderView) {
        this.model = model;
        this.view = view;

    }

    onMouseDown = (e: JQueryEventObject): void => {       
        this.view.subscribeOnMouseMove();
        this.view.subscribeOnMouseUp();
    }
 
    onMouseMove = (e: JQueryEventObject): void => {
        let position = this.view.moveSlider(e.pageX, this.model.minLimit, this.model.maxLimit);
        this.model.setPosition(Math.floor(position));
        this.view.outputField[0].value = this.model.getPosition();
    }
 
    onMouseUp = (e: JQueryEventObject): void => {
        this.view.unsubscribeMouseMove();
    }

    runPlugin(): void {
        this.view.render()
        this.view.initObserver(
                                  this.onMouseDown,
                                  this.onMouseMove,
                                  this.onMouseUp);
    }

};

export default SliderController;