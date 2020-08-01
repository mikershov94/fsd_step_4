interface ISubscriber {

    update(): void;

}

interface IPublisher {
    
    subscribe(subscriber: ISubscriber): ISubscriber[];
    unsubscribe(subscriber: ISubscriber): ISubscriber[];
    notify(): void;

}