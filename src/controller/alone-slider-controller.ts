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

            case 'wrapperRender':
                this.sendDataToModel({
                    offset: args.offset,
                });
                return
            
            case 'mouseDown':
                const messageForPage: TMessage = this.model.getState();
                this.view.subscribePageOnMove(messageForPage);
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