import Controller from './controller';

class AloneSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: ISliderModel, view: IView) {
        super(model, view);

    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'calculatedLengthRail':
                this.sendDataToModel({
                    lengthRail: args.length,
                })
                
                return;

            case 'calculatedOuterSizeSlider':
                this.sendDataToModel({
                    outerSizeSlider: args.outerSize
                })

                return;

            case 'calculatedOffset':
                this.sendDataToModel({
                    offsetRail: args.offset,
                });
                return
            
            case 'mouseDown':
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseMove':
                this.sendDataToModel({
                    value: this.model.moveSlider(args.posPointer)
                })

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