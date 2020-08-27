const fixOldPosition = ({posPointer, posSlider}: TActionArgs): number => {
    let offset: number;
    offset = posPointer - posSlider;

    return offset;
}

const moveSlider = ({posPointer, offsetRail, offsetWidth}: TActionArgs): number => {
    let newPosition: number;
    newPosition = posPointer - offsetRail - (offsetWidth / 2);

    return newPosition;
}

export {
    fixOldPosition,
    moveSlider
}