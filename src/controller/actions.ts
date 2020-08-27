const fixOldPosition = (posPointer: number, posSlider: number): number => {
    let offset: number;
    offset = posPointer - posSlider;

    return offset;
}

const moveSlider = (posPointer: number, offsetRail: number, offsetWidth: number): number => {
    let newPosition: number;
    newPosition = posPointer - offsetRail - (offsetWidth / 2);

    return newPosition;
}

export {
    fixOldPosition,
    moveSlider
}