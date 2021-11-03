interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;
}

interface IAloneSliderModel extends IModel {
    moveSlider(posPointer: TActionArgsValues): number;
    moveVerticalSlider(posPointer: TActionArgsValues): number;
}

interface IRangeSliderModel extends IModel {
    moveSliderA(posPointer: TActionArgsValues): number;
    moveSliderB(posPointer: TActionArgsValues): number;
    moveVerticalSliderA(posPointer: TActionArgsValues): number;
    moveVerticalSliderB(posPointer: TActionArgsValues): number;
}

type TSliderModel = IAloneSliderModel | IRangeSliderModel;