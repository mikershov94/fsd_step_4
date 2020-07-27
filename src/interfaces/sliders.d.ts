interface TAloneSlider extends IComponent {
    container: IComponent;
    wrapper: IComponent;
    rail: IComponent;
    slider: IComponent;
    progressBar: IComponent;
    outputField: IComponent;
}

interface TRangeSlider extends IComponent {
    container: IComponent;
    wrapper: IComponent;
    rail: IComponent;
    sliderA: IComponent;
    sliderB: IComponent;
    progressBar: IComponent;
    outputFieldA: IComponent;
    outputFieldB: IComponent;
}