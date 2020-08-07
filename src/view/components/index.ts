abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:          TState;
    protected parent:         any;
    protected children:       any; //это массив
    protected template:       string; //обязательное
    protected dataForParent:  TDataComponent | null;
    protected dataForChildren:TDataComponent | null;
    protected nameComponent:  string;
    //============================================

    constructor(props: any) {
        //остальные свойства берутся из свойств
        this.template = this.setTemplate();
        this.nameComponent = '';
    }

    //===========методы модели компонента=========
    protected setState(state: TState) {
        return Object.assign(this.state, state);
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
        let mapKey: string;
        for (mapKey in this.dataForParent) {
            if (mapKey == this.nameComponent) {
                this.setState(this.dataForParent[mapKey]);
                this.dataForParent.delete();
                return
            }
        }
    }

    protected checkDataToChildren(): void {
        let mapKey: string;
        for (mapKey in this.dataForChildren) {
            if (mapKey == this.nameComponent) {
                this.setState(this.dataForChildren[mapKey]);
                this.dataForChildren.delete();
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