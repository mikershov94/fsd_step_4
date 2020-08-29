interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): void;
}