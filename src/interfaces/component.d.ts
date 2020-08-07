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
    updateDataToParent(value: any): void;
    updateDataToParent(value: any): void;
    render(): JQuery;
}