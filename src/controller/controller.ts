import Model from "../model/model";
import View from "../view/view";

class Controller implements IController, ISubscriber {

    private model: IModel;
    private view:  IView;

    constructor(model: IModel, view: IView) {
        this.model = model;
        this.view = view;
    }

    private sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    private sendDataToView(data: TMessage): TMessage {
        
        return data;
    }

    update(data: any): void {
        return;
    }

    init(): void {
        let message: TMessage = this.model.getState();
        
        this.view.mountApplication(message)

        this.view.render();
    }

}

export default Controller;