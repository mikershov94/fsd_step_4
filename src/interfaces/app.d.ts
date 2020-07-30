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
    container:    JQuery | null;
    wrapper:      JQuery | null;
    output:       JQuery | null;
    rail:         JQuery | null;
    sliderA:      JQuery | null;
    sliderB:      JQuery | null;
    progressBar:  JQuery | null;
    outputFieldA: JQuery | null;
    outputFieldB: JQuery | null;
}