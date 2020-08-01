interface TState {
    position?: number;
    value?: number;
    min?: number;
    max?: number;
}

interface TProps {
    state: TState;
    parent: any;
    
}

interface IComponent {
    render(): JQuery;
}