import Controller from './controller';

class AloneSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: ISliderModel, view: IView) {
        super(model, view);

    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'calculatedPosition':
                this.sendDataToModel({
                    position: args.position
                })

                console.log(this.model.getState())
                return

            case 'calculatedWidthRail':
                this.sendDataToModel({
                    widthRail: args.width,
                })
                
                const paramsForScaleIndex: TMessage = {
                    min: this.model.getState().min,
                    max: this.model.getState().max,
                    width: this.model.getState().widthRail
                }

                this.model.calculateScaleIndex(paramsForScaleIndex);
                return;

            case 'calculatedOuterSizeSlider':
                this.sendDataToModel({
                    outerSizeSlider: args.outerSize
                })

                return;

            case 'calculatedLimits':
                this.sendDataToModel({
                    leftLimitMove: args.leftLimit,
                    rightLimitMove: args.rightLimit
                })
                return;

            case 'calculatedOffset':
                this.sendDataToModel({
                    offsetRail: args.offset,
                });
                return

            case 'getValue':
                this.model.calculateValue({
                    pos: this.model.getState().position,
                    index: this.model.getState().scaleIndex
                })
                  
                this.sendDataToView(this.model.getState());
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