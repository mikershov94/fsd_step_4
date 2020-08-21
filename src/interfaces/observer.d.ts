interface ISubscriber {
    update(data: TMessage): void;
}

interface IPublisher {  
    subscribe(subscriber: ISubscriber): ISubscriber[];
    notify(data: TMessage): void;
}