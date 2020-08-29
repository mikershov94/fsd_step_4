import Controller from './controller';

import {
    fixOldPosition,
    moveSlider

} from './actions';

class AloneSliderController extends Controller {

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
                let railOffset: TActionResult;
                railOffset = this.actions.fixOldPosition(args);

                this.sendDataToModel({
                    offset: railOffset,
                });
            
            case 'mouseDown':
                
            case 'mouseMove':
                this.sendDataToModel({
                    position: this.actions.moveSlider(args)
                })


            default:
                return

        }
    }

}

export default AloneSliderController;