import Control from './__control';

class ControlVertical extends Control {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected doingAfterRender(): void {
        const offset: number = this.jQueryElement.offset().top;

        //после рендеринга компонент обращается к диспатчеру
        //для запуска действия по вычислению 
        //ОТСТУПА ОТ ВЕРХНЕГО КРАЯ страницы
        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected setStyle(): string {
        return 'fsd-slider__control fsd-slider__control_vertical';
    }

}

export default ControlVertical;