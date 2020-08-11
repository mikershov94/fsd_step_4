type Publisher = IModel | IView | undefined;

interface ISubscriber {

    update(value: TMessage, publisher: Publisher): void;

}

interface IPublisher {
    
    subscribe(subscriber: ISubscriber): ISubscriber[];
    unsubscribe(subscriber: ISubscriber): ISubscriber[];
    notify(value: TMessage): void;

}