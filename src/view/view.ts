abstract class View implements IMainView, IPublisher, ISubscriber {
    public page: JQuery<Document>;
    protected rootContainer: JQuery;
    protected rootComponent: IComponent;

    private subsribers: ISubscriber[];

    constructor(rootContainer: JQuery) {
        this.page = $(document);
        this.rootContainer = rootContainer
        
    }
/*
    protected createElement(Component: new() => IComponent,
                          props: TMessage = {},
                          children: IComponent[] = []): IComponent {

        let element: IComponent = new Component();
        element.setParentView(this);
        element.mount(props);
        children.forEach(child => {
            element.adopt(child);
        })
        
        return element;
    }
*/

    adopt(component: IComponent): IComponent {
        this.rootComponent = component;
        this.rootComponent.setParent(this);
        return this.rootComponent;
    }
 
    mountApplication(props: TMessage): void {
        return
    }

    subscribeAppOnDispatcher(dispatcher: IDispatcher): void {
        this.rootComponent.subscribeOnDispatcher(dispatcher);
    }

    updateComponents(props: TMessage): void {
        this.rootComponent.update(props);
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
        this.subsribers.forEach((el: ISubscriber) => el.update(value))
    }

    update(value: TMessage): void {
        this.rootComponent.update(value);
    }

    render(): JQuery {
        let application = this.rootComponent.render();
        application.appendTo(this.rootContainer);
        return application;
    }
}

export default View;