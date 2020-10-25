interface IComponent {
    render(): JQuery;
    update(data: TMessage): void;
    afterRender(): void;
    setParent(parent: IComponent | IView): void;
    subscribeOnDispatcher(dispatcher: IDispatcher): void;
}