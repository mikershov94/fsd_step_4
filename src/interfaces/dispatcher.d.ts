interface IDispatcher {
    dispatch(action: string, args: TActionArgs): void;
}