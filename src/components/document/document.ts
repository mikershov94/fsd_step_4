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
            console.log('move');

            const newPosition: TNewPosition = {
                posPointer: event.pageX,
                offsetRail: this.state.offsetRail,
                offsetWidth: this.state.offsetWidth
            }
            this.dispatcher.dispatch('mouseMove', newPosition);
        };

        this.onMouseUp = (event: JQuery.MouseUpEvent) => {
            console.log('up');
            this.page.off('mousemove');
        }
    }

    subscribeOnDispatcher(dispatcher: IDispatcher): void {
        this.dispatcher = dispatcher;
    }

    subscribeOnMove(data: TMessage): void {
        this.state = {
            offsetRail: data.offsetRail,
            offsetWidth: data.offsetWidth
        }

        this.page.on('mousemove', this.onMouseMove);
    }

    subscribeOnUp(): void {
        this.page.on('mouseup', this.onMouseUp);
    }

}

export default Page;