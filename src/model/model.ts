abstract class Model implements IModel {

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
        this.notify(message);
    }

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
        return;
    }

    unsubscribe(subscriber: ISubscriber): ISubscriber[] {
        const idx = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(idx, 1);
        return this.subscribers;
    }

    protected notify(data: TMessage) {
        this.subscribers.forEach(subscriber => subscriber.update(data))
    }



}

export default Model;