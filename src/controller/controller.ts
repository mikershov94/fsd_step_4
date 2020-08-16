import Model from "../model/model";
import View from "../view/view";

class Controller implements IController, ISubscriber {

    private model: IModel;
    private view: IView;

    private subscribers: ISubscriber[];

    constructor(model: IModel, view: IView) {
        this.model = model;
        this.view = view;
    }

    private sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    private sendDataToView(data: TMessage): TMessage {
        this.view.updateDataForChildren(data);
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

    runPlugin(): void {
        let message: TMessage = this.model.getState();
        console.log(message)
        
        this.view.mountApplication(message)

        this.view.render();
    }

}

export default Controller;