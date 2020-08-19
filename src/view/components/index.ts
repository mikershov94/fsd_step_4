abstract class Component implements IComponent {

    //========== модель компонента ===============
    protected state:           TState;
    protected parent:          IComponent | IView;
    protected children:        IComponent[];
    protected template:        string;
    protected jQueryElement:   JQuery;
    protected props:           TMessage;
    
    //============================================

    constructor() {
        this.state = {};
        this.children = [];
        this.props = {};
        this.template = '';
    }

    //===========методы модели компонента=========
    protected setState(state: TMessage) {
        return Object.assign(this.state, state);
    }

    protected setProps(props: TMessage): void {
        return
    }

    //============================================


    //============контроллер компонента===========
    //============================================
    
    update(props: TMessage): void {
        console.log('обновление')
    }

    adopt(component: IComponent): IComponent[] {
        this.children.push(component);
        return this.children;
    }

    setParent(element: IComponent | IView): void {
        this.parent = element;
    }

    mount(props: TMessage): void {
        this.props = props;
        this.template = this.setTemplate();

        this.afterMount();
    }

    protected afterMount(): void {
        return;
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