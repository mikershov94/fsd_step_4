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

    moveSlider({posPointer,
        offsetRail,
        sizeSlider,
        minLimit,
        maxLimit }: any): number {

    let newPosition: number;
    newPosition = posPointer - sizeSlider / 2 - offsetRail;

    if (newPosition < minLimit) newPosition = minLimit;
    if (newPosition > (maxLimit - sizeSlider)) newPosition = (maxLimit - sizeSlider);

    return newPosition;
    }

}

export default Model;