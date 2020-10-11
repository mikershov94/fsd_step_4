interface IComponent {
    render(): JQuery;
    update(data: TMessage): void;
    runAfterRender(): void;
    setParent(parent: IComponent | IView): void;
    subscribeOnDispatcher(dispatcher: IDispatcher): void;
}