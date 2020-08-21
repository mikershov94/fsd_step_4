interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;
}

interface IModelComponent extends IModel{
    setProps(props: TMessage): void;
}