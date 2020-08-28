type TActionArgsValues = number | boolean;
type TActionResult = number | boolean;

interface TActionArgs {
    [index: string]: TActionArgsValues;
}

interface TAction {
    (args: any): TActionResult;
}

interface TActionList {
    [index: string]: TAction;
}
