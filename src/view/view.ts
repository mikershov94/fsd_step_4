abstract class View implements IView, IPublisher, ISubscriber {
    public page: JQuery<Document>;
    protected rootContainer: JQuery;
    protected rootComponent: IComponent;

    private subsribers: ISubscriber[];

    constructor(rootContainer: JQuery) {
        this.page = $(document);
        this.rootContainer = rootContainer
        this.mountApplication();
    }

    protected mountApplication(): void {
        return
    }

    updateDataForParent(value: TMessage): void {
        this.notify(value);
    }

    updateDataForChildren(value: TMessage): void {
        this.rootComponent.updateDataForChildren(value);
    }

    subscribe(subscriber: ISubscriber): ISubscriber[] {
        this.subsribers.push(subscriber);
        return this.subsribers;
    }

    unsubscribe(subscriber: ISubscriber): ISubscriber[] {
        const arrEl = this.subsribers.indexOf(subscriber);
        this.subsribers.splice(arrEl, 1);
        return this.subsribers;
    }

    notify(value: TMessage): void {
        this.subsribers.forEach((el: ISubscriber) => el.update(value, this))
    }

    update(value: TMessage): void {
        this.rootComponent.updateDataForChildren(value);
    }

    render(): JQuery {
        let application = this.rootComponent.render();
        application.appendTo(this.rootContainer);
        return application;
    }
}

export default View;