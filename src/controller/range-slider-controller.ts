import Controller from './controller';

import {
    moveSlider,
} from './actions';

class RangeSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: IModel, view: IView) {
        super(model, view);

        this.actions = {
            moveSlider, 
        }
    }

    protected reduce(action: string, args: TActionArgs): void {
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
                if (this.model.getState().clickSliderA) {
                    this.sendDataToModel({
                        positionA: this.actions.moveSlider(args)
                    });
                }

                if (this.model.getState().clickSliderB) {
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