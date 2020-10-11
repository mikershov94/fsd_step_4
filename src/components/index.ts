/// <reference path="../types/state.d.ts" />

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

    protected doingAfterRender(): void {
        return;
    }

    protected setStyle(className: string): string {
        let resClass: string = className;
        
        if (this.state.vertical) {
            resClass += ` ${className}_vertical`;
        }

        return resClass;
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

    runAfterRender(): void {
        this.doingAfterRender();
        this.children.forEach((child: IComponent) => {
            child.runAfterRender();
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

export default Component;