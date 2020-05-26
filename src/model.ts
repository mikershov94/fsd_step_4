class Slider {
    public minLimit: number;
    public maxLimit: number;

    protected _position: number;
    public get position(): number {
        return this._position;
    }
    public set position(value: number) {
        if (value < this.minLimit) {
            throw new Error("Position can't be less than minimum limit");
        } else if (value > this.maxLimit) {
            throw new Error("Position can't be more than maximum limit");
        } else {
            this._position = value;
        };
    }

    protected _step: number;
    public get step(): number {
        return this._step;
    }
    public set step(value: number) {
        if (value >= 0) {
            this._step = value;
            return
        };
        throw new Error("Prop step can't be less than zero");
    }


    constructor(min: number = 0,
                max: number = 100,
                step: number = 0) {

        this.minLimit = min;
        this.maxLimit = max;
        this._step = step;
        this._position = (min + max) / 2;

    }
};

export default Slider;