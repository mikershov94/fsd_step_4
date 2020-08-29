import Controller from './controller';

import {
    moveSlider,
    sliderAClicked,
    sliderBClicked
} from './actions';

class RangeSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: IModel, view: IMainView) {
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
            
            case 'mouseDownA':
                const messageForPage: TMessage = this.model.getState();
                this.view.subscribePageOnMove(messageForPage);
                this.sendDataToModel({
                    clickSliderA: true,
                });
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                });

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

            case 'mouseUpA':
                this.sendDataToModel({
                    clickSliderA: false,
                });

            case 'mouseUpB':
                this.sendDataToModel({
                    clickSliderB: false
                })
                

            default:
                return;

        }
    }

}

export default RangeSliderController