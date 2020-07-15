interface ISliderView {
    plugin: JQuery;
    container: JQuery;
    wrapper: JQuery;
    rail: JQuery;
    slider: JQuery;
    outputField: JQuery;

    callbackDown: (e: JQuery.MouseDownEvent) => void;
    callbackMove: void;
    callbackUp: void;

    moveSlider(pageX: number,
               minLimit: number,
               maxLimit: number
              ): number;

    initObserver(callbackDown: (e: JQuery.MouseDownEvent) => void): void;
/*
    subscribeOnMouseMove(): void;
    subscribeOnMouseUp(): void;
    unsubscribeMouseMove(): void;
*/
    render(): JQuery;
}