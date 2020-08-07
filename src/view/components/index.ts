abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:           TState;
    protected parent:          any;
    protected children:        any; //это массив
    protected template:        string; //обязательное
    protected dataForParent:   TDataComponent | null;
    protected dataForChildren: TDataComponent | null;
    protected componentId:     string;
    //============================================

    constructor(props: any) {
        //остальные свойства берутся из свойств
        this.template = this.setTemplate();
        this.componentId = this.generateId();
    }

    //===========методы модели компонента=========
    protected setState(state: TState) {
        return Object.assign(this.state, state);
    }

    protected generateId(): string {
        let id: number = Math.floor((Math.random() * 100000));
        return id.toString(16);       
    }
    //============================================


    //============контроллер компонента===========
    //============================================
    updateDataToParent(value: TDataComponent): void {
        this.dataForParent = value;
        this.checkDataToParent();
        this.sendDataToParent();
        this.dataForParent = null;
    }

    updateDataToChildren(value: TDataComponent): void {
        this.dataForChildren = value;
        this.checkDataToChildren();
        this.sendDataToChildren();
        this.dataForChildren = null
    }

    protected sendDataToParent(): void {
        this.parent.updateDataToParent(this.dataForParent);
        this.dataForParent = null;
    }

    protected sendDataToChildren(): void {
        this.children.forEach((child: any) => {
            child.updateDataToChildren();
        });
        this.dataForChildren = null;
    }

    protected checkDataToParent(): void {
        let prop: string;
        for (prop in this.dataForParent) {
            if (prop == this.componentId) {
                this.setState(this.dataForParent[prop]);
                delete this.dataForParent[prop];
                return
            }
        }
    }

    protected checkDataToChildren(): void {
        let prop: string;
        for (prop in this.dataForChildren) {
            if (prop == this.componentId) {
                this.setState(this.dataForChildren[prop]);
                delete this.dataForChildren[prop]
                return
            }
        }
    }
    //================================================
    //================================================


    //==============представление компонента============
    protected setTemplate(): string {
        return '<div></div>';
    }

    render(): JQuery {
        return $(this.template);
    }
    //==================================================

}

export default Component;