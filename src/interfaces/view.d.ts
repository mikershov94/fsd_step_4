interface IView {
    update(message: TMessage): void;
    render(): JQuery;
}

interface IMainView extends IView {
    page: JQuery<Document>;
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
}