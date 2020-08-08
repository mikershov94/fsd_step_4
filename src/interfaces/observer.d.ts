interface ISubscriber {

    update(value: TDataComponent): void;

}

interface IPublisher {
    
    subscribe(subscriber: ISubscriber): ISubscriber[];
    unsubscribe(subscriber: ISubscriber): ISubscriber[];
    notify(value: TDataComponent): void;

}