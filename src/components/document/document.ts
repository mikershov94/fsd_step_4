interface TNewPosition extends TActionArgs {
    posPointer: number;
    offsetRail: number;
    sizeSlider: number;
}

interface TPageState extends TState {
    vertical: boolean;
    offsetRail: number;
    sizeSlider: number;
}

class Page implements IDocument {

    private page:       JQuery<Document>;
    private dispatcher: IDispatcher;

    private state: TPageState;

    private onMouseMove: TMoveHandler;
    private onMouseUp:   TUpHandler;

    constructor() {
        this.page = $(document);

        this.onMouseMove = (event: JQuery.MouseMoveEvent) => {
            const posPointer: number = this.state.vertical ? event.pageY : event.pageX;

            const newPosition: TNewPosition = {
                posPointer: posPointer,
                offsetRail: this.state.offsetRail,
                sizeSlider: this.state.sizeSlider
            }
            this.dispatcher.dispatch('mouseMove', newPosition);
        };

        this.onMouseUp = (event: JQuery.MouseUpEvent) => {
            this.dispatcher.dispatch('mouseUp', {});
        }
    }

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
    }

    subscribeOnMove(data: TMessage): void {
        this.state = {
            vertical: data.vertical,
            offsetRail: data.offsetRail,
            sizeSlider: data.sizeSlider
        }

        this.page.on('mousemove', this.onMouseMove);
        this.page.on('mouseup', this.onMouseUp);
    }

    unsubscribeOffMove(): void {
        this.page.off('mousemove');
    }

}

export default Page;