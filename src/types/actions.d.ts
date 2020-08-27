interface TAction {
    (args: any): void;
}

interface TActionList {
    [index: string]: TAction;
}