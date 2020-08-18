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
    mount(props: TMessage): void;
    render(): JQuery;
    update(props: TMessage): void;

    adopt(element: IComponent): IComponent[];
}