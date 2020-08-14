abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:           TState;
    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected template:        string;
    protected jQueryElement:   JQuery;
    
    
    //============================================

    constructor(props: TMessage) {
        this.state = {};
        this.children = [];
        this.setState(props);
        this.template = this.setTemplate();
    }

    //===========методы модели компонента=========
    protected setState(state: TMessage) {
        return Object.assign(this.state, state);
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

    setRoot(view: IView): IView {
        this.parent = view;
        return this.parent;
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
        console.log(Object.keys(this.state))
        for (prop in this.state) {

            let key: string;
            for (key in this.dataForChildren) {

                if (key == prop) {
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
        console.log(this)
        return template;
    }
    //==================================================

}

export default Component;