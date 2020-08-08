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

interface IRangeModelState {
    min: number,
    max: number,
    step: number,
    defaultPositionA: number,
    defaultPositionB: number
}

interface TDataModel {
    min?: number;
    max?: number;
    step?: number;
}

interface TAloneDataModel extends TDataModel {
    position?: number;
}

interface TRangeDataModel extends TDataModel {
    positionA?: number;
    positionB?: number;    
}

type DataModel = TAloneDataModel | TRangeDataModel;

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

type ModelState = TAloneGlobalState | TRangeGlobalState;

interface IModel {
    getState(): DataModel;
    setState(data: DataModel): void;
}