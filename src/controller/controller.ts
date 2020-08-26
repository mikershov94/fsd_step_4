import Model from "../model/model";
import View from "../view/view";

class Controller implements IController, ISubscriber, IDispatcher {

    private model: IModel;
    private view:  IMainView;

    private actions: TActionList;

    constructor(model: IModel, view: IMainView) {
        this.model = model;
        this.view = view;

        this.actions = {
            onMouseDown: (e: JQuery.MouseDownEvent): void => {
                console.log('down');
                this.view.subscribeOnGlobalMove();
            },

            onMouseMove: (e: JQuery.MouseMoveEvent): void => {
                console.log('move');
            },

            onMouseUp: (e: JQuery.MouseUpEvent): void => {
                console.log('up');
            }
        }
    }

    private sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    private sendDataToView(data: TMessage): TMessage {
        
        return data;
    }

    init(): void {
        let message: TMessage = this.model.getState();
        this.view.mountApplication(message)

        this.view.render();
    }

    update(data: any): void {
        return;
    }

    dispatch(action: string): void {
        
        switch(action) {

            case 'mousedown':
                this.actions.onMouseDown(e)

        }

    }

}

export default Controller;