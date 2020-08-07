interface TState {
    position?: number;
    value?: number;
    min?: number;
    max?: number;
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
    render(): JQuery;
}