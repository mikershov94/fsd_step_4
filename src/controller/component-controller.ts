import Component from "../components";

class ComponentController implements IComponentController, ISubscriber {

    protected model: IModel;
    protected view:  IView;

    constructor(model: IModel, view: IView) {
        this.model = model;
        this.view = view;
    }

    init(): JQuery {
        const data: TMessage = this.model.getState();

        return this.view.render(data);
    }

    mount(data: TMessage): void {
        
    }
    
    update(data: TMessage): void {
        this.view.render(data)
    }

}

export default ComponentController;