import $ from 'jquery';

class Rail {

    private element: JQuery;

    constructor() {
        this.element = $('<div class="rail"></div>')
    }

    mount(): JQuery {
        return this.element;
    }

}

export default Rail;