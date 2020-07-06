interface ISliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    slider: JQuery;
    outputField: JQuery;

    callbackDown: VoidFunction;
    callbackMove: VoidFunction;
    callbackUp: VoidFunction;

    moveSlider(pageX: number,
               minLimit: number,
               maxLimit: number
              ): number;

    initObserver(callbackDown: VoidFunction,
                 callbackMove: VoidFunction,
                 callbackUp: VoidFunction
                ): void;

    subscribeOnMouseMove(): void;
    subscribeOnMouseUp(): void;
    unsubscribeMouseMove(): void;

    render(): JQuery;
}