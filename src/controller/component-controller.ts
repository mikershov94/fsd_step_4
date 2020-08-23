import Component from "../components";

class ComponentController implements IComponentController, ISubscriber {

    protected model: IModelComponent;
    protected view:  IView;

    constructor(model: IModelComponent, view: IView) {
        this.model = model;
        this.view = view;
    }

    protected doingMount(): void {
        return
    }

    init(): JQuery {
        const data: TMessage = this.model.getState();

        return this.view.render(data);
    }

    mount(data: TMessage): void {
        this.model.setProps(data);
        this.doingMount();
    }
    
    update(data: TMessage): void {
        this.view.render(data)
    }

}

export default ComponentController;