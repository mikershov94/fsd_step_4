import Model from "../model/model";
import View from "../view/view";

class Controller implements IController, ISubscriber {

    private model: IModel;
    private view: IMainView;

    private subscribers: ISubscriber[];

    constructor(model: IModel, view: IMainView) {
        this.model = model;
        this.view = view;
    }

    private sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    private sendDataToView(data: TMessage): TMessage {
        this.view.updateComponents(data);
        return data;
    }

    update(data: any, publisher: Publisher = undefined): void {
        if (publisher instanceof Model) {
            this.sendDataToView(data);
            return;
        }

        if (publisher instanceof View) {
            this.sendDataToModel(data);
            return;
        }

        return;
    }

    init(): void {
        let message: TMessage = this.model.getState();
        
        this.view.mountApplication(message)

        this.view.render();
    }

}

export default Controller;