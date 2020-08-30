type ValueState = number | string | boolean | null;

interface TState {
    [index: string]: ValueState;
}