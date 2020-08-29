import Controller from './controller';

import {
    moveSlider,
    sliderAClicked,
    sliderBClicked
} from './actions';

class RangeSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: IModel, view: IView) {
        super(model, view);

        this.actions = {
            moveSlider, 
            sliderAClicked,
            sliderBClicked
        }
    }

    protected reduce(action: string, args: TActionArgs): void {
        console.log(this.model.getState())
        switch(action) {

            case 'railRender':
                this.sendDataToModel({
                    offsetRail: args.offset,
                });
                return;
            
            case 'mouseDownA':
                this.sendDataToModel({
                    clickSliderA: true,
                    offsetWidth: args.outerWidth
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                    offsetWidth: args.outerWidth
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;

            case 'mouseMove':
                if (this.actions.sliderAClicked) {
                    this.sendDataToModel({
                        positionA: this.actions.moveSlider(args)
                    });
                }

                if (this.actions.sliderBClicked) {
                    this.sendDataToModel({
                        positionB: this.actions.moveSlider(args)
                    })
                }
                return;

            case 'mouseUp':
                this.sendDataToModel({
                    clickSliderA: false,
                    clickSliderB: false
                });
                this.view.unsubscribePageOffMove();
                return;

            default:
                return;

        }
    }

}

export default RangeSliderController