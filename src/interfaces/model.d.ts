interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;

    init(): void;
}

interface ISliderModel extends IModel {
    moveSlider(args: any): number;
    calculateScaleIndex({min, max, width}: TMessage): number
    calculateValue({pos, index}: TMessage): number;
}