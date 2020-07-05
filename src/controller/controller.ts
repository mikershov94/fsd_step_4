class SliderController {
    public model: any;
    public view: any;

    constructor(model: any, view: any) {
        this.model = model;
        this.view = view;

    }

    onMouseDown = (e: JQueryEventObject): void => {       
        this.view.subscribeOnMouseMove();
        this.view.subscribeOnMouseUp();
    }
 
    onMouseMove = (e: JQueryEventObject): void => {
        let position = this.view.moveSlider(e.pageX, this.model.minLimit, this.model.maxLimit);
        this.model.setPosition(position);
        console.log(this.model.getPosition())
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