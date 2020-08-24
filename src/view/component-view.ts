class ViewComponent implements IView {

    protected template:        string;
    protected jQueryElement:   JQuery;

    constructor(template: string) {
        this.template = template;
        this.jQueryElement = $(this.template);
    }

    protected doingRender(): void {
        return
    }

    render(data: TMessage): JQuery {
        this.doingRender();
        return this.jQueryElement;
    }

}

export default ViewComponent;