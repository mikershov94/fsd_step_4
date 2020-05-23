class Rail {
    minLimit: number;
    maxLimit: number;
    step: number;

    constructor(minValue: number = 100,
                maxValue: number = 100,
                stepValue: number = 0) {

        this.minLimit = minValue;
        this.maxLimit = maxValue;
        this.step = stepValue;
    
    }
}

class Slider {
    position: number;

    constructor(value: number = 0) {
        this.position = value;
    }

    moveUp(step): number {
        return this.position + step;
    }

    moveDown(step): number {
        return this.position - step;
    }
}