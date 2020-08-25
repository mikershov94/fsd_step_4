interface IView {
    render(data: TMessage): JQuery;
}

interface IMainView extends IView {
    page: JQuery<Document>;
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    render(): JQuery;
}