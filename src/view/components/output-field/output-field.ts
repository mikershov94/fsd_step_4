import $ from 'jquery';

class OutputField {

    private element: JQuery;

    constructor(pos: number) {
        this.element = $(`<input value="${pos}" />`)
    }
    
    mount(): JQuery {
        return this.element;
    }

}

export default OutputField;