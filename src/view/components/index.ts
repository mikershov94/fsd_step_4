abstract class Component implements IComponent {

    protected element: JQuery;

    mount(): JQuery {
        return this.element;
    }

}

export default Component;