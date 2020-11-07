import Controller from './controller';

class AloneSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: ISliderModel, view: IView) {
        super(model, view);

    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'calculatedWidthRail':
                this.sendDataToModel({
                    widthRail: args.width,
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
                /*
                this.sendDataToModel({
                    sizeSlider: args.outerSize,
                    limitRailMin: args.minLimit,
                    limitRailMax: args.maxLimit
                })
                */
                
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseMove':
                this.sendDataToModel({
                    value: this.model.moveSlider(args.posPointer)
                })

                //console.log(this.model.getState().value)
                
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