type ModelState = TGlobalState | TAloneGlobalState | TRangeGlobalState;

interface IModel {
    getState(): TMessage;
    setState(data: TMessage): void;
}