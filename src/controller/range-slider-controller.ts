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
                this.view.page.on('mousemove', this.actions.onMouseMoveA);
                this.view.page.on('mouseup', this.actions.onMouseUp);
            },

            onMouseDownB: (e: JQuery.MouseDownEvent) => {
                this.view.page.on('mousemove', this.actions.onMouseMoveB);
                this.view.page.on('mouseup', this.actions.onMouseUp);
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
                this.view.page.off('mousemove');
            }
        }

    }

    runPlugin(defaultValues: IConfigPlugin): void {
        this.view.render(defaultValues.defaultPositionA, defaultValues.defaultPositionB);
        this.view.sliderA.on('mousedown', this.actions.onMouseDownA);
        this.view.sliderB.on('mousedown', this.actions.onMouseDownB);
    }
}

export default RangeSliderController;