abstract class Component implements IComponent {

    //модель компонента
    protected state: TState;
    protected parent: any;
    protected children: any; //это массив
    protected template: string; //обязательное
    protected dataToParent: TDataComponent | null;
    protected dataToChildren: TDataComponent | null;

    constructor(props: any) {
        //остальные свойства берутся из свойств
        this.template = this.setTemplate();
    }
    //методы модели компонента

    //методы контроллера компонента
    updateDataToParent(value: TDataComponent): void {
        this.dataToParent = value;
        this.sendDataToParent();
    }

    updateDataToChildren(value: TDataComponent): void {
        this.dataToChildren = value;
        this.sendDataToChildren();
    }

    protected sendDataToParent(): void {
        this.parent.updateDataToParent(this.dataToParent);
        this.dataToParent = null;
    }

    protected sendDataToChildren(): void {
        this.children.forEach((child: any) => {
            child.updateDataToChildren();
        });
        this.dataToChildren = null;
    }

    //методы представления компонента
    protected setTemplate(): string {
        return '<div></div>';
    }

    render(): JQuery {
        return $(this.template);
    }

}

export default Component;