const moveSlider = ({posPointer,
                     offsetRail,
                     sizeSlider,
                     minLimit,
                     maxLimit }: any): number => {
    let newPosition: number;
    newPosition = posPointer - sizeSlider / 2 - offsetRail;
    
    if (newPosition < minLimit) newPosition = minLimit;
    if (newPosition > maxLimit) newPosition = maxLimit;

    return newPosition;
}

export {
    moveSlider,
}