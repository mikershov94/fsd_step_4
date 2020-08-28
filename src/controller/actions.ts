const fixOldPosition = ({posPointer, posSlider}: any): number => {
    let offset: number;
    offset = posPointer - posSlider;

    return offset;
}

const moveSlider = ({posPointer,
                     offsetRail,
                     offsetWidth }: any): number => {
    let newPosition: number;
    newPosition = posPointer - offsetRail - (offsetWidth / 2);

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
    fixOldPosition,
    moveSlider,
    sliderAClicked,
    sliderBClicked
}