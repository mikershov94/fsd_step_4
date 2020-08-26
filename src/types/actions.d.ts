interface TAction {
    (): void;
}

interface TActionList {
    [index: string]: TAction;
}