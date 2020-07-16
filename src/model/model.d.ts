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