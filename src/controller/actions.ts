const moveSlider = ({posPointer,
                     offsetRail,
                     offsetWidth,
                     minLimit,
                     maxLimit }: any): number => {
    let newPosition: number;
    newPosition = posPointer - offsetWidth / 2 - offsetRail;
    
    if (newPosition < minLimit) newPosition = minLimit;
    if (newPosition > maxLimit) newPosition = maxLimit;

    return newPosition;
}

export {
    moveSlider,
}