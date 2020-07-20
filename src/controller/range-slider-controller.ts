/// <reference path="controller.d.ts" />
/// <reference path="../model/model.d.ts" />
/// <reference path="../view/view.d.ts" />

class RangeSliderController implements IRangeSliderController {
    public model: IRangeSliderModel;
    public view: IRangeSliderView;

    public onMouseDownA: IDownHandler;
    public onMouseDownB: IDownHandler;
    public onMouseMoveA: IMoveHandler;
    public onMouseMoveB: IMoveHandler;
    public onMouseUp: IUpHandler;

    constructor(model: IRangeSliderModel, view: IRangeSliderView) {
        this.model = model;
        this.view = view;

        this.onMouseDownA = (e: JQuery.MouseDownEvent) => {
            this.view.subscribeOnMoveA();
            this.view.subscribeOnMouseUp();
        }

        this.onMouseDownB = (e: JQuery.MouseDownEvent) => {
            this.view.subscribeOnMoveB();
            this.view.subscribeOnMouseUp();
        }

        this.onMouseMoveA = (e: JQuery.MouseMoveEvent) => {
            const posB: number = this.model.getPositionB();
            let position: number = this.view.moveSliderA(e.pageX, this.model.minLimit, posB);
            
            this.model.setPositionA(Math.floor(position));
            this.view.outputFieldA.val(this.model.getPositionA());
        }

        this.onMouseMoveB = (e: JQuery.MouseMoveEvent) => {
            const posA: number = this.model.getPositionA();
            let position: number = this.view.moveSliderB(e.pageX, this.model.maxLimit, posA);
            
            this.model.setPositionB(Math.floor(position));
            this.view.outputFieldB.val(this.model.getPositionB());
        }

        this.onMouseUp = (e: JQuery.MouseUpEvent) => {
            this.view.unsubscribeMouseMove();
        }
    }

    runPlugin(defaultValues: any): void {
        this.view.render(defaultValues.defaultPositionA, defaultValues.defaultPositionB);
        this.view.initObserver(this.onMouseDownA,
                               this.onMouseDownB,
                               this.onMouseMoveA,
                               this.onMouseMoveB,
                               this.onMouseUp);
    }
}

export default RangeSliderController;