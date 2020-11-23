import Controller from './controller';

class RangeSliderController extends Controller {

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
            
            case 'mouseDownA':
                this.sendDataToModel({
                    clickSliderA: true,
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;

            case 'mouseMove':
                if (this.model.getState().clickSliderA) {
                    if (args.vertical) {
                        this.sendDataToModel({
                            valueA: this.model.moveVerticalSlider(args.posPointer)
                        })
                    }
                    this.sendDataToModel({
                        valueA: this.model.moveSlider(args.posPointer),
                    });
                }

                if (this.model.getState().clickSliderB) {
                    if (args.vertical) {
                        this.sendDataToModel({
                            valueB: this.model.moveVerticalSlider(args.posPointer)
                        })
                    }
                    this.sendDataToModel({
                        valueB: this.actions.moveSlider(args.posPointer)
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