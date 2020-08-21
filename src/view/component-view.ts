class ViewComponent implements IView {

    protected template:        string;
    protected jQueryElement:   JQuery;

    protected setTemplate(): string {
        return '<div></div>';
    }

    protected doingRender(): void {
        return
    }

    protected subscribeOnEvents(): void { //для контроллера
        return
    }

    render(data: TMessage): JQuery {
        let template: JQuery = $(this.template)
        this.jQueryElement = template;
        this.doingRender();
        
        return this.jQueryElement;
    }

}