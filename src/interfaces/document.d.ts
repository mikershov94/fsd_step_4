interface IDocument {
    subscribeOnDispatcher(dispatcher: IDispatcher): void;
    subscribeOnMove(data: TMessage): void;
}