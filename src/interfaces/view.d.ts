interface IView {
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    render(): JQuery;
    getOffsetApplication(): void;
    updateComponents(data: TMessage): void;
    subscribeAppOnDispatcher(dispatcher: IDispatcher): void;
    subscribePageOnMove(data: TMessage): void;
    unsubscribePageOffMove(): void;
}