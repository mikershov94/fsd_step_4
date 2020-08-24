class ViewComponent implements IView {

    protected template:        string;
    protected jQueryElement:   JQuery;

    constructor() {
        this.template = this.setTemplate();
        this.jQueryElement = $(this.template);
    }

    protected setTemplate(): string {
        return '<div></div>';
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