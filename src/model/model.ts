abstract class Model implements IModel {

    protected state:       TState;
    protected subscribers: ISubscriber[];

    constructor() {
        this.state = {};
        this.subscribers = [];
    }

    protected notify() {
        const data: TMessage = this.getState();
        this.subscribers.forEach(subscriber => subscriber.update(data))
    }
    
    getState(): TMessage {
        let message: TMessage = {};
        Object.assign(message, this.state);
        return message;
    }

    setState(message: TMessage): void {
        Object.assign(this.state, message);
        this.notify();
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

    moveSlider(args: any): number {

        let newPosition: number;
        return newPosition;
    
    }

    calculateScaleIndex(message: TMessage): number {
        let scaleIndex: number;
        return scaleIndex;
    }

}

export default Model;