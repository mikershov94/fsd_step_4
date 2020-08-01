abstract class Component implements IComponent{

    protected state: TState;
    protected parent: any;
    protected children: any; //это массив
    protected template: string; //обязательное

    constructor(props: any) {
        this.template = this.setTemplate();
    }

    protected setTemplate(): string {
        return '<div></div>';
    }

    render(): JQuery {
        return $(this.template);
    }

}

export default Component;