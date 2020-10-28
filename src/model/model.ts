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

    init(): void {
        //вычисление количества полосок
        const range: TMessage = {
            min: this.getState().min,
            max: this.getState().max,
            step: this.getState().step
        }

        const countStripes: number = (range.max - range.min) / range.step;

        this.setState({countStripes});
    }

    unsubscribe(subscriber: ISubscriber): ISubscriber[] {
        const idx = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(idx, 1);
        return this.subscribers;
    }

}

export default Model;