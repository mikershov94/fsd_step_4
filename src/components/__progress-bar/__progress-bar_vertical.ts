import ProgressBar from './__progress-bar';

class ProgressBarVertical extends ProgressBar {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        const prefix: string = this.state.prefix;
        return prefix + '__progress-bar_vertical'
    }

}

export default ProgressBarVertical;