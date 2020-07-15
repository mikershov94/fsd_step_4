/// <reference path="controller.d.ts" />
/// <reference path="../view/view.d.ts" />
/// <reference path="../model/model.d.ts" />

class SliderController implements ISliderController{
    public model: ISliderModel;
    public view: ISliderView;

    public onMouseDown: (e: JQuery.MouseDownEvent) => void

    constructor(model: ISliderModel, view: ISliderView) {
        this.model = model;
        this.view = view;

        this.onMouseDown = (e: JQuery.MouseDownEvent) => { 
            console.log('щёлк')      
            //this.view.subscribeOnMouseMove();
            //this.view.subscribeOnMouseUp();
        }

    }

 /*
    onMouseMove = (e: JQuery.MouseMoveEvent) => {
        let position = this.view.moveSlider(e.pageX, this.model.minLimit, this.model.maxLimit);
        this.model.setPosition(Math.floor(position));
        this.view.outputField.val(this.model.getPosition());
    }
 
    onMouseUp = (e: JQuery.MouseUpEvent) => {
        this.view.unsubscribeMouseMove();
    }
*/
    runPlugin(): void {
        this.view.render()
        this.view.initObserver(this.onMouseDown);
    }

};

export default SliderController;