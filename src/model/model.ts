abstract class Model implements IModel, IPublisher {

    protected data: ModelState;
    protected subscribers: ISubscriber[];

    constructor(state: any) {
        this.data.max = state.max;
        this.data.min = state.min;
        this.data.step = state.step;
    }
    
    getState(): DataModel {
        return this.data;
    }

    setState(data: DataModel): void {
        Object.assign(this.data, data);
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