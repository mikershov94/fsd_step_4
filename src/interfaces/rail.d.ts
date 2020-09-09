interface TRailState extends TState {
    min: number,
    max: number,
    vertical: boolean
}

interface IRailComponent extends IComponent {
    getLimits(): TLimits;
}