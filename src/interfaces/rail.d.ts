interface TRailState extends TState {
    vertical: boolean
}

interface IRailComponent extends IComponent {
    getLimits(): TLimits;
}