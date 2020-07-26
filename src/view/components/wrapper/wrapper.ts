import $ from 'jquery';

class Wrapper {

    private element: JQuery;

    constructor() {
        this.element = $('<div class="wrapper"></div>')
    }

    mount(): JQuery {
        return this.element;
    }

}

export default Wrapper;