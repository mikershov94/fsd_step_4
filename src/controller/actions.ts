const moveSlider = ({posPointer,
                     offsetRail,
                     sizeSlider,
                     minLimit,
                     maxLimit }: any): number => {
    let newPosition: number;
    newPosition = posPointer - sizeSlider / 2 - offsetRail;
    
    const values: any = {
        posPointer,
        offsetRail,
        sizeSlider,
        minLimit,
        maxLimit
    }
    
    console.log(values)
    if (newPosition < minLimit) newPosition = minLimit;
    if (newPosition > (maxLimit - sizeSlider)) newPosition = (maxLimit - sizeSlider);

    return newPosition;
}

export {
    moveSlider,
}