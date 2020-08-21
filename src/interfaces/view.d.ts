interface IView {
    page: JQuery<Document>;
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    updateComponents(props: TMessage): void;
    render(): JQuery;
}