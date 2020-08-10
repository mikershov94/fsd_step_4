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

    private sendDataToModel(data: TDataComponent): DataModel {
        let dataForModel: DataModel = {};
        let prop: string;
        for (prop in data) {
            Object.assign(dataForModel, data[prop]);
        }
        this.model.setState(dataForModel);
        return dataForModel;
    }

    private sendDataToView(data: DataModel): TDataComponent {
        let dataForView: TDataComponent = {};
        
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
        this.view.render();
    }

}

export default Controller;