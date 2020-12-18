import Scale from './__scale';

class ScaleVertical extends Scale {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setStyle(): string {
        return 'fsd-slider__scale_vertical';
    }

    protected doingRender(): void {

        const stripesCount: number = (this.state.max - this.state.min) / this.state.step;

        //рисуем полоски через шаг step
        for (let i: number = 0; i <= stripesCount; i++) {
            let stripe: JQuery;

            if (i % 2 == 0) {
                stripe = $(`<div class="scale__stripe_width_full scale__stripe_height_null"></div>`)
            } else {
                stripe = $(`<div class="scale__stripe_width_short scale__stripe_height_null"></div>`);
            }
            
            this.jQueryElement.append(stripe)
        }
    }

}

export default ScaleVertical;