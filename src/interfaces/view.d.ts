interface IView {
    render(data: TMessage): JQuery;
}

interface IMainView extends IView {
    page: JQuery<Document>;
    subscribeOnGlobalMove(): void;

    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    subscribeAppOnDispatcher(dispatcher: IDispatcher): void;
    render(): JQuery;
}