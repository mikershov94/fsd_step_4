abstract class Controller implements IController, ISubscriber{

    protected model: ISliderModel;
    protected view:  IView;

    constructor(model: ISliderModel, view: IView) {
        this.model = model;
        this.view = view;

        this.model.subscribe(this);
    }

    protected sendDataToModel(data: TMessage): TMessage {
        this.model.setState(data);
        return data;
    }

    protected sendDataToView(data: TMessage): TMessage {
        this.view.updateComponents(data);
        return data;
    }

    protected reduce(action: string, args: TActionArgs): void {
        return
    }

    init(): void {
        this.model.init();

        let message: TMessage = this.model.getState();
        this.view.mountApplication(message);

        this.view.subscribeAppOnDispatcher(this);

        this.view.render();

        this.view.afterRender();
    }

    update(data: TMessage): void {
        this.sendDataToView(data);
        return;
    }

    dispatch(action: string, args: TActionArgs): void {
        this.reduce(action, args);
    }

}

export default Controller;