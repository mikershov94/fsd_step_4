class Slider {
    minLimit: number;
    maxLimit: number;
    step: number;
    position: number;

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