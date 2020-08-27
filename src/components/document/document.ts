class Page implements IDocument {

    private page:       JQuery<Document>;
    private dispatcher: IDispatcher;

    constructor() {
        this.page = $(document);
    }

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
    }

    subscribeOnMove(callback: TMoveHandler): void {
        this.page.on('mousemove', callback);
    }

}

export default Page;