interface ISubscriber {

    update(value: any): void;

}

interface IPublisher {
    
    subscribe(subscriber: ISubscriber): ISubscriber[];
    unsubscribe(subscriber: ISubscriber): ISubscriber[];
    notify(value: any): void;

}