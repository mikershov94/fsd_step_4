/// <reference path="model.d.ts" />

class SliderModel implements ISliderModel{
    public minLimit: number;
    public maxLimit: number;

    protected _position: number;

    public getPosition(): number {
        return this._position;
    }
    public setPosition(value: number): void {
        if (value < this.minLimit) {
            throw new Error("Position can't be less than minimum limit");
        } else if (value > this.maxLimit) {
            throw new Error("Position can't be more than maximum limit");
        } else {
            this._position = value;
        };
    }

    protected _step: number;
    public getStep(): number {
        return this._step;
    }
    public setStep(value: number): void {
        if (value >= 0) {
            this._step = value;
            return
        };
        throw new Error("Prop step can't be less than zero");
    }


    constructor(min: number = 0,
                max: number = 500,
                step: number = 0) {

        this.minLimit = min;
        this.maxLimit = max;
        this._step = step;
        this._position = (min + max) / 2;

    }
};

export default SliderModel;