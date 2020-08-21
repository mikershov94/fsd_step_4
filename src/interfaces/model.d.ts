interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;
}