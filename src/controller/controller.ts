import Model from "../model/model";
import View from "../view/view";

abstract class Controller implements IController {

    protected model: IModel;
    protected view:  IMainView;

    constructor(model: IModel, view: IMainView) {
        this.model = model;
        this.view = view;

    }

    protected sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    protected sendDataToView(data: TMessage): TMessage {
        
        return data;
    }

    protected reduce(action: string, args: TActionArgs): void {
        return
    }

    init(): void {
        let message: TMessage = this.model.getState();
        this.view.mountApplication(message)

        this.view.render();
    }

    update(data: any): void {
        return;
    }

    dispatch(action: string, args: TActionArgs): void {
        this.reduce(action, args);
    }

}

export default Controller;