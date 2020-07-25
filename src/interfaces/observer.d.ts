interface ISubscriber {

    update(publisher: IPublisher): void;

}

interface IPublisher {
    
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notify(): void;

}