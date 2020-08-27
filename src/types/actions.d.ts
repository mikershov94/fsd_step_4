interface TActionArgs {
    [index: string]: number;
}

interface TAction {
    (args: TActionArgs): number;
}

interface TActionList {
    [index: string]: TAction;
}
