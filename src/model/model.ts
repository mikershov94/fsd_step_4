abstract class Model implements IModel, IPublisher {

    protected state:       TState;
    protected subscribers: ISubscriber[];

    constructor() {
        this.state = {};
    }
    
    getState(): TMessage {
        let message: TMessage = {};
        Object.assign(message, this.state);
        return message;
    }

    setState(message: TMessage): void {
        Object.assign(this.state, message);
    }

    subscribe(subscriber: ISubscriber): ISubscriber[] {
        this.subscribers.push(subscriber);
        return this.subscribers;
    }

    unsubscribe(subscriber: ISubscriber): ISubscriber[] {
        const idx = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(idx, 1);
        return this.subscribers;
    }

    notify(data: any) {
        this.subscribers.forEach(subscriber => subscriber.update(data, this))
    }



}

export default Model;