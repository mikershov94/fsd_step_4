interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;
}

interface ISliderModel extends IModel {
    moveSlider(posPointer: TActionArgsValues): number;
    moveVerticalSlider(posPointer: TActionArgsValues): number;
}