interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;
    moveSlider(args: any): number;
    calculateScaleIndex({min, max, width}: TMessage): number

}