class Page implements IDocument {

    private page:       JQuery<Document>;
    private dispatcher: IDispatcher;

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
    }

}

export default Page;