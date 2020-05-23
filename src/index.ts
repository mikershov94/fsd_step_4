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