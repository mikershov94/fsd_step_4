class SliderController {
    public model: any;
    public view: any;

    constructor(model: any, view: any) {
        this.model = model;
        this.view = view;

    }

    onMouseDown = (e: JQueryEventObject): void => {
        // this.view.slider.left = e.pageX + 'px'        
        console.log('down')
        this.view.subscribeOnMouseMove();
        this.view.subscribeOnMouseUp();
    }
 
    onMouseMove = (e: JQueryEventObject): void => {
        //this.view.moveSlider(e.pageX);
        console.log('move')
    }
 
    onMouseUp = (e: MouseEvent): void => {
        this.view.unsubscribeMouseMove();
 
        console.log('up')
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