import $ from 'jquery';

class Container {

    private element: JQuery;

    constructor() {
        this.element = $('<div class="container"></div>');
    }

    mount(): JQuery {
        return this.element;
    }

}

export default Container;