import Controller from './controller';

import {
    fixOldPosition,
    moveSlider
} from './actions';

class RangeSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: IModel, view: IMainView) {
        super(model, view);

        this.actions = {
            fixOldPosition,
            moveSlider
        }
    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'wrapperRender':
                let railOffset: number;
                railOffset = this.actions.fixOldPosition(args);

                this.sendDataToModel({
                    offset: railOffset,
                });
            
            case 'mouseDownA':
                this.sendDataToModel({
                    clickSliderA: true,
                });
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                });

            case 'mouseMove':
                const clickSliderA: MessageValue = this.model.getState().clickSliderA;

                this.sendDataToModel{

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