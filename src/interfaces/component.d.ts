type ValueState = number | boolean | null;

interface TState {
    [index: string]: ValueState;
}



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