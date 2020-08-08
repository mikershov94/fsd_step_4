interface TAppContainer {
    range: boolean;
    scale: boolean;
}

interface IAloneSlider {
    container: JQuery | undefined;
    wrapper: JQuery | undefined;
    output: JQuery | undefined;
    rail: JQuery| undefined;
    slider: JQuery | undefined;
    progressBar: JQuery | undefined;
    outputField: JQuery | undefined;
}

interface IRangeSlider {
    container?:    JQuery;
    wrapper?:      JQuery;
    output?:       JQuery;
    rail?:         JQuery;
    sliderA?:      JQuery;
    sliderB?:      JQuery;
    progressBar?:  JQuery;
    outputFieldA?: JQuery;
    outputFieldB?: JQuery;
}