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

interface IComponent {
    updateDataToParent(): void;
    updateDataToParent(): void;
    render(): JQuery;
}