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

const sliderAClicked = (state: TMessage): boolean => {
    if (state.clickSliderA) {
        return true;
    }

    return false;
}

const sliderBClicked = (state: TMessage): boolean => {
    if (state.clickSliderB) {
        return true;
    }

    return false;
}

export {
    moveSlider,
    sliderAClicked,
    sliderBClicked
}