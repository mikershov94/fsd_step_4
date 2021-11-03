import Controller from './controller';

class RangeSliderController extends Controller {

    protected actions: TActionList;
    protected model: IRangeSliderModel;

    constructor(model: IRangeSliderModel, view: IView) {
        super(model, view);
        this.model = model;

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
                    clickedSliderA: true,
                    clickedSliderB: false
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickedSliderA: false,
                    clickedSliderB: true,
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;

            case 'mouseMove':
               // console.log({clickA: this.model.getState().cli})
                if (this.model.getState().clickedSliderA) {
                    if (args.vertical) {
                        this.sendDataToModel({
                            valueA: this.model.moveVerticalSliderA(args.posPointer)
                        })
                        this.sendDataToView(Object.assign(args, {}));
        
                        return
                    }
                    this.sendDataToModel({
                        valueA: this.model.moveSliderA(args.posPointer),
                    });
                    this.sendDataToView(Object.assign(args, {}));
                    return;
                }

                if (this.model.getState().clickedSliderB) {
                    if (args.vertical) {
                        this.sendDataToModel({
                            valueB: this.model.moveVerticalSliderB(args.posPointer)
                        });
                        this.sendDataToView(Object.assign(args, {}));
                        return
                    }
                    this.sendDataToModel({
                        valueB: this.model.moveSliderB(args.posPointer)
                    });
                    this.sendDataToView(Object.assign(args, {}));
                    return;
                }

            case 'mouseUp':
                
                this.sendDataToModel({
                    clickedSliderA: false,
                    clickedSliderB: false
                });
                this.view.unsubscribePageOffMove();
                return;

            default:
                return;

        }
    }

}

export default RangeSliderController