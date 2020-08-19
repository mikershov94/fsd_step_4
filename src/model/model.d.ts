interface IAloneSliderModel {
    minLimit: number;
    maxLimit: number;

    getPosition(): number;
    setPosition(value: number): void;

    getStep(): number;
    setStep(value: number): void;
}

interface IRangeSliderModel {
    
    minLimit: number;
    maxLimit: number;

    getPositionA(): number;
    getPositionB(): number;
    setPositionA(value: number): void;
    setPositionB(value: number): void;

}

interface IAloneModelState {
    min: number,
    max: number,
    step: number,
    defaultPosition: number,
}

interface IRangeModelState {
    min: number,
    max: number,
    step: number,
    defaultPositionA: number,
    defaultPositionB: number
}

interface TGlobalState {
    min: number;
    max: number;
    step: number;
}

interface TAloneGlobalState extends TGlobalState {
    position: number;
}

interface TRangeGlobalState extends TGlobalState {
    positionA: number;
    positionB: number;
}

type ModelState = TGlobalState | TAloneGlobalState | TRangeGlobalState;

interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;
}