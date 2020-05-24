class Slider {
    constructor(min: number = 0,
                max: number = 100,
                step: number = 0) {

        this.minLimit = min;
        this.maxLimit = max;
        this.step = step;

    }
};

export default Slider;