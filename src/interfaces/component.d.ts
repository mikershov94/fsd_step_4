type ValueState = number | boolean;

interface TState {
    [index: string]: ValueState;
}

interface TProps {
    state?: TState;
    parent?: any;
    children?: any;
}

type TDataComponent = Record<string, TState>;

interface IComponent {
    updateDataForParent(value: any): void;
    updateDataForChildren(value: any): void;
    setParent(parent: IComponent): IComponent;
    setRoot(view: IView): IView;
    adopt(child: IComponent): IComponent[];
    render(): JQuery;
}