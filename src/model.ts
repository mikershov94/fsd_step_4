class Slider {
    public minLimit: number;
    public maxLimit: number;
    public position: number;

    protected step: number;
    set step(value) {
        if (value < 0) throw new Error("Property can't be less than zero");
        this.step = value;
    }

    constructor(min: number = 0,
                max: number = 100,
                step: number = 0) {

        this.minLimit = min;
        this.maxLimit = max;
        this.step = step;
        this.position = max / 2;

    }
};

export default Slider;