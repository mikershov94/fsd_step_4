import Component from "../components";

class ComponentController implements IComponentController {

    protected model: IModel;
    protected view:  IView;

    constructor(model: IModel, view: IView) {

        this.model = model;
        this.view = view;

    }

    mount(data: TMessage): JQuery {



    }
    
    update(data: TMessage): void {

    }

}

export default ComponentController;