import Controller from './controller';

class RangeSliderController extends Controller {

    protected actions: TActionList;

    constructor(model: ISliderModel, view: IView) {
        super(model, view);

    }

    protected reduce(action: string, args: TActionArgs): void {
        switch(action) {

            case 'calculatedOffset':
                this.sendDataToModel({
                    offsetRail: args.offset,
                });
                return;
            
            case 'mouseDownA':
                this.sendDataToModel({
                    clickSliderA: true,
                    sizeSlider: args.outerSize,
                    limitRailMin: args.minLimit,
                    limitRailMax: args.maxLimit
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;
                
            case 'mouseDownB':
                this.sendDataToModel({
                    clickSliderB: true,
                    sizeSlider: args.outerSize,
                    limitRailMin: args.minLimit,
                    limitRailMax: args.maxLimit
                });
                this.view.subscribePageOnMove(this.model.getState());
                return;

            case 'mouseMove':
                const messageWithLimits: TMessage = this.model.getState();

                if (this.model.getState().clickSliderA) {
                    //добавляем лимиты движения в аргументы
                    Object.assign(args, {
                        minLimit: messageWithLimits.min,
                        maxLimit: messageWithLimits.positionB
                    });

                    this.sendDataToModel({
                        positionA: this.model.moveSlider(args)
                    });
                }

                if (this.model.getState().clickSliderB) {
                    //добавляем лимиты движения в аргументы
                    Object.assign(args, {
                        minLimit: messageWithLimits.positionA,
                        maxLimit: messageWithLimits.max
                    })

                    this.sendDataToModel({
                        positionB: this.actions.moveSlider(args)
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