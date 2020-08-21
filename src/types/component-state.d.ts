type ValueState = number | boolean | null;

interface TState {
    [index: string]: ValueState;
}