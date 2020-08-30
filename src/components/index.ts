abstract class Component implements IComponent {

    protected props:         TMessage;
    protected parent:        IComponent | IView;
    protected children:      IComponent[];

    protected state:         TState;
    protected template:      string;
    protected jQueryElement: JQuery;

    protected dispatcher:    IDispatcher;

    constructor(props: TMessage, children: IComponent[] = []) {
        this.props = props;
        
        this.state = this.initStateComponent();
        this.template = this.setTemplate();

        this.children = children;
        this.children.forEach((child: IComponent) => {
            child.setParent(this);
        })

        
    }

    protected setState(newState: TMessage): void {
        Object.assign(this.state, newState);
    }

    protected calculateOffset(): void {
        return;
    }

    protected initStateComponent(): TState {
        return {};
    }

    protected setTemplate(): string {
        return '<div></div>';
    }

    protected doingRender(): void {
        return
    }

    protected subscribeOnEvent(): void {
        return
    }

    protected updateState(): void {
        return
    }

    protected updateRender(): void {
        return
    }

    setParent(parent: IComponent): void {
        this.parent = parent;
    }

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
        this.children.forEach((child: IComponent) => {
            child.subscribeOnDispatcher(this.dispatcher);
        })
    }

    render(): JQuery {
        this.jQueryElement = $(this.template);
        this.children.forEach((child: IComponent) => {
            const element = child.render();
            this.jQueryElement.append(element);
        })
        this.doingRender();
        this.subscribeOnEvent();
        return this.jQueryElement;
    }

    getOffset(): void {
        this.calculateOffset();
        this.children.forEach((child: IComponent) => {
            child.getOffset();
        })
    }

    update(data: TMessage): void {
        this.props = data;
        this.updateState();
        this.updateRender();
        this.children.forEach((child: IComponent) => {
            child.update(this.props)
        })
    }

}


/*
abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:           TState;
    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected parentView:      IView;
    protected notifier:        IPublisher;
    protected template:        string;
    protected jQueryElement:   JQuery;
    protected props:           TMessage;
    
    //============================================

    constructor() {
        this.state = {};
        this.children = [];
        this.props = {};
        this.template = '';
    }

    //===========методы модели компонента=========
    protected setState(state: TMessage): TState {
        Object.assign(this.state, state);
        return this.state;
    }

    protected getState(): TMessage {
        let message: TMessage = {};
        Object.assign(message, this.state);
        return message;
    }

    protected setProps(props: TMessage): void {
        return
    }

    //============================================


    //============контроллер компонента===========
    //============================================
    
    sendStateToNotifier(): void {
        let message = this.getState();
        this.notifier.notify(message)
    }

    update(props: TMessage): void {
        this.props = props;

        this.updateState();
        this.props = null;
    }

    adopt(component: IComponent): IComponent[] {
        this.children.push(component);
        return this.children;
    }

    setParent(element: IComponent | IView): void {
        this.parent = element;
    }

    setParentView(view: IView): void {
        this.parentView = view;
    }

    setNotifier(notifier: IPublisher): void {
        this.notifier = notifier;
    }

    mount(props: TMessage): void {
        this.props = props;
        this.template = this.setTemplate();

        this.afterMount();
        this.props = null;
    }

    protected afterMount(): void {
        return;
    }

    protected updateState(): void {
        return;
    }

    
    //================================================
    //================================================


    //==============представление компонента============
    protected setTemplate(): string {
        return '<div></div>';
    }

    protected doingRender(): void {
        return
    }

    protected subscribeOnEvents(): void {
        return
    }

    render(): JQuery {
        let template: JQuery = $(this.template)
        this.jQueryElement = template;
        this.doingRender();
        this.subscribeOnEvents();
        this.children.forEach((child: IComponent) => {
            this.jQueryElement.append(child.render());
        })
        return this.jQueryElement;
    }
    //==================================================

}
*/

export default Component;