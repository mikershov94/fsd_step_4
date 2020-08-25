import ModelComponent from '../model/component-model';
import ViewComponent from '../view/component-view';
import ControllerComponent from '../controller/component-controller';
import { Controller } from '../controller';

abstract class Component implements IComponent {

    protected controller:   IComponentController;

    protected props:        TMessage;
    protected parent:       IComponent | IView;
    protected children:     IComponent[];

    constructor(props: TMessage, children: IComponent[] = []) {
        this.props = props;
        
        const state: TState = this.initStateComponent();
        const model: IModel = new ModelComponent(state);

        const template: string = this.setTemplate();
        const view: IView = new ViewComponent(template);

        this.controller = new ControllerComponent(model, view);

        this.children = children;
        this.children.forEach((child: IComponent) => {
            child.setParent(this);
        })
    }

    protected initStateComponent(): TState {
        return {};
    }

    protected setTemplate(): string {
        return '<div></div>';
    }

    setParent(parent: IComponent): void {
        this.parent = parent;
    }

    render(): JQuery {
        const element: JQuery = this.controller.init();
        this.children.forEach((child: IComponent) => {
            element.append(child.render());
        })
        return element;
    }

    update(data: TMessage): void {
        this.props = data;
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