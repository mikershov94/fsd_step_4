import Controller from './controller';

import {
    moveSlider

} from './actions';

class AloneSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: IModel, view: IView) {
        super(model, view);

        this.actions = {
            moveSlider
        }
    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'calculatedOffset':
                this.sendDataToModel({
                    offsetRail: args.offset,
                });
                return
            
            case 'mouseDown':
                this.sendDataToModel({
                    sizeSlider: args.outerSize,
                    limitRailMin: args.minLimit,
                    limitRailMax: args.maxLimit
                })
                
                this.view.subscribePageOnMove(this.model.getState());
                console.log(this.model.getState())
                return;
                
            case 'mouseMove':
                this.sendDataToModel({
                    position: this.actions.moveSlider(args)
                });
                return;

            case 'mouseUp':
                this.view.unsubscribePageOffMove();
                return;


            default:
                return;

        }
    }

}

export default AloneSliderController;