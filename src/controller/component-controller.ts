import Component from "../components";

class ComponentController implements IComponentController, ISubscriber {

    protected model: IModelComponent;
    protected view:  IView;

    constructor(model: IModelComponent, view: IView) {
        this.model = model;
        this.view = view;
    }

    mount(data: TMessage): void {
        this.model.setProps(data);
        this.doingMount();
        return this.sendStateToView();
    }
    
    update(data: TMessage): void {
        this.view.render(data)
    }

}

export default ComponentController;