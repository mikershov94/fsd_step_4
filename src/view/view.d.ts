interface ISliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    slider: JQuery;
    outputField: JQuery;

    callbackDown: IDownHandler;
    callbackMove: IMoveHandler;
    callbackUp: IUpHandler;

    moveSlider(pageX: number,
               minLimit: number,
               maxLimit: number
              ): number;

    initObserver(callbackDown: IDownHandler,
                 callbackMove: IMoveHandler,
                 callbackUp: IUpHandler): void;

    subscribeOnMouseMove(): void;
    subscribeOnMouseUp(): void;
    unsubscribeMouseMove(): void;

    render(defaultPosition: number): JQuery;
}

interface IRangeSliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    sliderA: JQuery;
    sliderB: JQuery;
    outputFieldA: JQuery;
    outputFieldB: JQuery;

    initObserver(): void;

    render(defaultPosA: number, defaultPosB: number): void;
}