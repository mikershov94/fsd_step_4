/// <reference path="controller.d.ts" />
/// <reference path="../model/model.d.ts" />
/// <reference path="../view/view.d.ts" />

class RangeSliderController implements IRangeSliderController {
    public model: IRangeSliderModel;
    public view: IRangeSliderView;

    public actions: IRangeActions;

    constructor(model: IRangeSliderModel, view: IRangeSliderView) {
        this.model = model;
        this.view = view;

        this.actions = {
            
            onMouseDownA: (e: JQuery.MouseDownEvent) => {
                this.view.subscribeOnMoveA();
                this.view.subscribeOnMouseUp();
            },

            onMouseDownB: (e: JQuery.MouseDownEvent) => {
                this.view.subscribeOnMoveB();
                this.view.subscribeOnMouseUp();
            },

            onMouseMoveA: (e: JQuery.MouseMoveEvent) => {
                const posB: number = this.model.getPositionB();
                let position: number = this.view.moveSliderA(e.pageX, this.model.minLimit, posB);
                this.view.moveFillA(position, posB);
                
                this.model.setPositionA(Math.floor(position));
                this.view.outputFieldA.val(this.model.getPositionA());
            },

            onMouseMoveB: (e: JQuery.MouseMoveEvent) => {
                const posA: number = this.model.getPositionA();
                let position: number = this.view.moveSliderB(e.pageX, this.model.maxLimit, posA);
                this.view.moveFillB(posA, position);
                
                this.model.setPositionB(Math.floor(position));
                this.view.outputFieldB.val(this.model.getPositionB());
            },

            onMouseUp: (e: JQuery.MouseUpEvent) => {
                this.view.unsubscribeMouseMove();
            }
        }

    }

    runPlugin(defaultValues: IConfigPlugin): void {
        this.view.render(defaultValues.defaultPositionA, defaultValues.defaultPositionB);
        this.view.initObserver(this.actions.onMouseDownA,
                               this.actions.onMouseDownB,
                               this.actions.onMouseMoveA,
                               this.actions.onMouseMoveB,
                               this.actions.onMouseUp);
    }
}

export default RangeSliderController;