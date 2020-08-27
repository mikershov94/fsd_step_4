interface IView {
    render(data: TMessage): JQuery;
}

interface IMainView extends IView {
    adopt(container: IComponent): IComponent;
    mountApplication(props: TMessage): void;
    subscribeAppOnDispatcher(dispatcher: IDispatcher): void;
    subscribePageOnMove(callback: TMoveHandler): void;
    render(): JQuery;
}