import Page from '../components/document';

abstract class View implements IView {
    protected page:          IDocument;
    protected rootContainer: JQuery;
    protected rootComponent: IComponent;

    constructor(rootContainer: JQuery) {
        this.page = new Page();
        this.rootContainer = rootContainer
        
    }

    adopt(component: IComponent): IComponent {
        this.rootComponent = component;
        this.rootComponent.setParent(this);
        return this.rootComponent;
    }
 
    mountApplication(props: TMessage): void {
        return
    }

    subscribeAppOnDispatcher(dispatcher: IDispatcher): void {
        this.page.subscribeOnDispatcher(dispatcher);
        this.rootComponent.subscribeOnDispatcher(dispatcher);
    }

    subscribePageOnMove(data: TMessage): void {
        this.page.subscribeOnMove(data);
    }

    unsubscribePageOffMove(): void {
        this.page.unsubscribeOffMove();
    }

    updateComponents(props: TMessage): void {
        this.rootComponent.update(props);
    }
    
    getOffsetApplication(): void {
        this.rootComponent.getOffset();
    }

    render(): JQuery {
        let application = this.rootComponent.render();
        application.appendTo(this.rootContainer);
        return application;
    }
}

export default View;