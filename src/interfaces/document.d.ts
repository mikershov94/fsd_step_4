interface IDocument {
    page: JQuery<Document>;
    subscribeOnDispatcher(dispatcher: IDispatcher): void;
}