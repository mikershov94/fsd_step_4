type MessageValue = number | boolean

interface TMessage {
    [index: string]: MessageValue;
}