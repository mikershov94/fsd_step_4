class SliderController {
    public model: any;
    public view: any;

    constructor(model: any, view: any) {
        this.model = model;
        this.view = view;

        this.view.subscribeOnMouseDown(this.onMouseDownSlider);
    }

    testOutput(): void {
        console.log('плагин подключен и робит');
    }

    onMouseDownSlider(e: object): void {
       // this.view.slider.left = e.pageX + 'px'        

        this.view.subscribeOnMouseMove(this.onMoveSlider);
    }

    onMoveSlider(e: object): void {
        
    }

    onMouseUpSlider(e: object): void {
        this.view.subscribeOnMouseUp(this.onMoveSlider);
    }

};

export default SliderController;