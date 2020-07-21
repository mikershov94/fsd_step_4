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
    filling: JQuery;

    callbackDownA: IDownHandler;
    callbackDownB: IDownHandler;
    callbackMoveA: IMoveHandler;
    callbackMoveB: IMoveHandler;
    callbackUp: IUpHandler;

    moveSliderA(pageX: number, min: number, posB: number): number;
    moveSliderB(pageX: number, max: number, posA: number): number;
    moveFillA(posA: number, posB: number): void;
    moveFillB(posA: number, posB: number): void;

    initObserver(callbackDownA: IDownHandler,
                 callbackDownB: IDownHandler,
                 callbackMoveA: IMoveHandler,
                 callbackMoveB: IMoveHandler,
                 callbackUp: IUpHandler): void;

    subscribeOnMoveA(): void;
    subscribeOnMoveB(): void;
    subscribeOnMouseUp(): void;
    unsubscribeMouseMove(): void;

    render(defaultPosA: number, defaultPosB: number): void;
}