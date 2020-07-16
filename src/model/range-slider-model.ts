/// <reference path="model.d.ts" />

class RangeSliderModel implements IRangeSliderModel {

    public minLimit: number;
    public maxLimit: number;

    protected _positionA: number;
    protected _positionB: number;

    getPositionA(): number {
        return this._positionA;
    }

    getPositionB(): number {
        return this._positionB;
    }

    setPositionA(value: number): void {
        this._positionA = value;
    }

    setPositionB(value: number): void {
        this._positionB = value;
    }

}

export default RangeSliderModel;