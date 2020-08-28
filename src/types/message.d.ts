type TMessageValue = number | boolean;

interface TMessage {
    [index: string]: TMessageValue;
}