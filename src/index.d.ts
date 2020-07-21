interface JQuery {
    fsdSlider(options: object): JQuery
}

interface IConfigPlugin {
    min: number,
    max: number,
    step: number,
    defaultPosition: number,
    defaultPositionA: number,
    defaultPositionB: number,
    rangeSlider: boolean,
    verticalView: boolean,
    discreteScale: boolean,
    round: number
}