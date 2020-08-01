interface IAloneSliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    slider: JQuery;
    outputField: JQuery;
    filling: JQuery;

    callbackDown: IDownHandler;
    callbackMove: IMoveHandler;
    callbackUp: IUpHandler;

    moveFill(position: number): void;
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
    page: JQuery<Document>;
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    sliderA: JQuery;
    sliderB: JQuery;
    outputFieldA: JQuery;
    outputFieldB: JQuery;
    filling: JQuery;

    actions: IRangeActions;

    moveSliderA(pageX: number, min: number, posB: number): number;
    moveSliderB(pageX: number, max: number, posA: number): number;
    moveFillA(posA: number, posB: number): void;
    moveFillB(posA: number, posB: number): void;

    render(defaultPosA: number, defaultPosB: number): void;
}

interface IView {
    page: JQuery<Document>;
    render(): JQuery;
}