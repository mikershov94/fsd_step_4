import ProgressBar from './__progress-bar';

class ProgressBarVertical extends ProgressBar {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__progress-bar_vertical'
    }

}

export default ProgressBarVertical;