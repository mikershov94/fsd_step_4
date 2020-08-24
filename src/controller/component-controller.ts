import Component from "../components";

class ComponentController implements IComponentController, ISubscriber {

    protected model: IModelComponent;
    protected view:  IView;

    constructor(model: IModelComponent, view: IView) {
        this.model = model;
        this.view = view;
    }

    init(): JQuery {
        const data: TMessage = this.model.getState();

        return this.view.render(data);
    }

    mount(data: TMessage): void {
        this.model.setProps(data);
        
    }
    
    update(data: TMessage): void {
        this.view.render(data)
    }

    mountParent(parent: IComponent): void {
        this.model.setParent(parent);
    }

}

export default ComponentController;