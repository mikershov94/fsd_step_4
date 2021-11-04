import Component from '../index';

class Control extends Component {

    constructor(props: TMessage, children: IComponent[]) {
        super(props, children);
    }

    protected setTemplate(): string {
        let style: string = this.setStyle();

        return `<div class="${style}"></div>`;
    }

    protected doingAfterRender(): void {
        const offset: number = this.jQueryElement.offset().left;

        //после рендеринга компонент обращается к диспатчеру
        //для запуска действия по вычислению 
        //ОТСТУПА ОТ ЛЕВОГО КРАЯ страницы
        this.dispatcher.dispatch('calculatedOffset', { offset })
    }

    protected setStyle(): string {
        return 'fsd-slider__control';
    }

}

export default Control;