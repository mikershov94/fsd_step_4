const moveSlider = ({posPointer,
                     offsetRail,
                     sizeSlider,
                     minLimit,
                     maxLimit }: any): number => {
    let newPosition: number;
    newPosition = posPointer - sizeSlider / 2 - offsetRail;
    
    console.log(minLimit)
    if (newPosition < 0) newPosition = 0;
    if (newPosition > (maxLimit - sizeSlider)) newPosition = (maxLimit - sizeSlider);

    return newPosition;
}

export {
    moveSlider,
}