abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:           TState;
    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected template:        string;
    protected jQueryElement:   JQuery;
    protected dataForParent:   TMessage | null;
    protected dataForChildren: TMessage | null;
    protected componentId:     string;
    //============================================

    constructor(props: any = { state: {} }) {
        this.state = props.state;
        this.children = [];
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
    updateDataForParent(value: TMessage): void {
        this.dataForParent = value;
        this.checkDataForParent();
        this.sendDataToParent();
        this.dataForParent = null;
    }

    updateDataForChildren(value: TMessage): void {
        this.dataForChildren = value;
        this.checkDataForChildren();
        this.sendDataToChildren();
        this.dataForChildren = null
    }

    setParent(component: IComponent): IComponent {
        this.parent = component;
        return this.parent;
    }

    adopt(child: IComponent): IComponent[] {
        let newChild: IComponent = child;
        newChild.setParent(this);
        this.children.push(newChild);
        return this.children;
    }

    protected sendDataToParent(): void {
        this.parent.updateDataForParent(this.dataForParent);
        this.dataForParent = null;
    }

    protected sendDataToChildren(): void {
        this.children.forEach((child: IComponent) => {
            child.updateDataForChildren(this.dataForChildren);
        });
        this.dataForChildren = null;
    }

    protected checkDataForParent(): void {
        let prop: string;
        for (prop in this.state) {

            let key: string;
            for (key in this.dataForParent) {

                if (key === prop) {
                    this.state[prop] = this.dataForParent[key];
                    delete this.dataForParent[key];
                    break;
                }

            }

        }
    }

    protected checkDataForChildren(): void {
        let prop: string;
        for (prop in this.state) {

            let key: string;
            for (key in this.dataForChildren) {

                if (key === prop) {
                    this.state[prop] = this.dataForChildren[key];
                    delete this.dataForChildren[key];
                    break;
                }

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
        let template: JQuery = $(this.template)
        this.children.forEach((child: IComponent) => {
            template.append(child.render());
        })
        this.jQueryElement = template;
        return template;
    }
    //==================================================

}

export default Component;