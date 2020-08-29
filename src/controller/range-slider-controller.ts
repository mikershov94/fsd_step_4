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
        switch(action) {

            case 'wrapperRender':
                this.sendDataToModel({
                    offset: args.offset,
                });
                return;
            
            case 'mouseDownA':
                const messageForPage: TMessage = this.model.getState();
                this.view.subscribePageOnMove(messageForPage);
                this.sendDataToModel({
                    clickSliderA: true,
                });
                return;
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                });
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