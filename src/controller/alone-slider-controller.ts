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
                    offsetWidth: args.outerWidth
                })
                
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseMove':
                const messageWithLimits: TMessage = this.model.getState();

                Object.assign(args, {
                    minLimit: messageWithLimits.min,
                    maxLimit: messageWithLimits.max
                });

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