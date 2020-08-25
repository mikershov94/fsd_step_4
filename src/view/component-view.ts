class ViewComponent implements IView {

    protected template:        string;
    protected jQueryElement:   JQuery;

    constructor(template: string) {
        this.template = template;
        this.jQueryElement = $(this.template);
    }

    protected doingRender(data: TMessage): void {
        return
    }

    render(data: TMessage): JQuery {
        this.doingRender(data);
        return this.jQueryElement;
    }

}

export default ViewComponent;