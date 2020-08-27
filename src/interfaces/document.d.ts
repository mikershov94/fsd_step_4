interface IDocument {
    subscribeOnDispatcher(dispatcher: IDispatcher): void;
    subscribeOnMove(callback: TMoveHandler): void;
}