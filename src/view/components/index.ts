abstract class Component implements IComponent, ISubscriber{

    protected state: TState;
    protected parent: any;
    protected children: any; //это массив
    protected template: string; //обязательное

    constructor(props: any) {
        //остальные свойства берутся из свойств
        this.template = this.setTemplate();
    }
    //методы модели компонента

    //методы контроллера компонента
    update(): void {}

    //методы представления компонента
    protected setTemplate(): string {
        return '<div></div>';
    }

    render(): JQuery {
        return $(this.template);
    }

}

export default Component;