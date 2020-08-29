interface IView {
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    subscribeAppOnDispatcher(dispatcher: IDispatcher): void;
    subscribePageOnMove(data: TMessage): void;
    unsubscribePageOffMove(): void;
    render(): JQuery;
}