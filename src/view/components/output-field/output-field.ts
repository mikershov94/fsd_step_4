import $ from 'jquery';

class OutputField {
    
    render(pos: number): JQuery {
        return $(`<input value="${pos}" />`);
    }

}

export default OutputField;