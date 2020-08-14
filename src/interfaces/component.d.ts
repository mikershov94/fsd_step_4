type ValueState = number | boolean | null;

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
    updateState(props: TMessage): void;
    setParent(parent: IComponent): IComponent;
    setRoot(view: IView): IView;
    adopt(child: IComponent): IComponent[];
    render(): JQuery;
}