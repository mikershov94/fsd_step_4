interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;
}

interface IAloneSliderModel extends IModel {
    moveSlider(posPointer: number): number;
    moveVerticalSlider(posPointer: number): number;
}

interface IRangeSliderModel extends IModel {
    moveSliderA(posPointer: number): number;
    moveSliderB(posPointer: number): number;

    moveVerticalSliderA(posPointer: number): number;
    moveVerticalSliderB(posPointer: number): number;
}