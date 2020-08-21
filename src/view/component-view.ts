class ViewComponent implements IView {

    protected template:        string;
    protected jQueryElement:   JQuery;

    protected setTemplate(): string {
        return '<div></div>';
    }

    protected doingRender(): void {
        return
    }

    protected subscribeOnEvents(): void {
        return
    }

    render(data: any, children: IComponent[]): JQuery {
        let template: JQuery = $(this.template)
        this.jQueryElement = template;
        this.doingRender();
        this.subscribeOnEvents();
        this.children.forEach((child: IComponent) => {
            this.jQueryElement.append(child.render());
        })
        return this.jQueryElement;
    }

}