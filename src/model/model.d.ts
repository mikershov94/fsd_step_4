interface ISliderModel {
    minLimit: number;
    maxLimit: number;

    getPosition(): number;
    setPosition(value: number): void;

    getStep(): number;
    setStep(value: number): void;
}