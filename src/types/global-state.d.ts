interface TGlobalState {
    min: number;
    max: number;
    step: number;
}

interface TAloneGlobalState extends TGlobalState {
    position: number;
}

interface TRangeGlobalState extends TGlobalState {
    positionA: number;
    positionB: number;
}

type ModelState = TGlobalState | TAloneGlobalState | TRangeGlobalState;