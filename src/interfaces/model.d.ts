interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;

    subscribe(subscriber: ISubscriber): IPublisher;
    notify(data: TMessage): void;
}