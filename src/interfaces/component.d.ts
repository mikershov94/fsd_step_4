interface IComponent {
    render(data: TMessage): JQuery;
    update(data: TMessage): void;

    adopt(parent: IComponent): void;
}


/*
interface IComponent {
    mount(props: TMessage): void;
    render(): JQuery;
    update(props: TMessage): void;

    adopt(element: IComponent): IComponent[];
    setParent(element: IComponent | IView): void;
    setParentView(view: IView): void;
    setNotifier(notifier: IPublisher): void;

    sendStateToNotifier(): void;
}

*/