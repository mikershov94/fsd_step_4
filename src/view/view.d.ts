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

    render(): JQuery;
}

interface IRangeSliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    sliderBefore: JQuery;
    sliderAfter: JQuery;
    outputFieldBefore: JQuery;
    outputFieldAfter: JQuery;

    initObserver(): void;

    render(): void;
}