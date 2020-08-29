interface TNewPosition extends TActionArgs {
    posPointer: number;
    offsetRail: number;
    offsetWidth: number;
}

interface TPageState extends TState {
    offsetRail: number;
    offsetWidth: number;
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
            console.log(this.state);

            const newPosition: TNewPosition = {
                posPointer: event.pageX,
                offsetRail: this.state.offsetRail,
                offsetWidth: this.state.offsetWidth
            }
            this.dispatcher.dispatch('mouseMove', newPosition);
        };

        this.onMouseUp = (event: JQuery.MouseUpEvent) => {
            console.log('up');
            this.dispatcher.dispatch('mouseUp', {});
        }
    }

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
    }

    subscribeOnMove(data: TMessage): void {
        console.log(data)
        this.state = {
            offsetRail: data.offsetRail,
            offsetWidth: data.offsetWidth
        }

        this.page.on('mousemove', this.onMouseMove);
        this.page.on('mouseup', this.onMouseUp);
    }

    unsubscribeOffMove(): void {
        this.page.off('mousemove');
    }

}

export default Page;