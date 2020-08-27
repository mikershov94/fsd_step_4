interface IDispatcher {
    dispatch(action: string, event: Evt): void;
}