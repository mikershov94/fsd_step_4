import $ from 'jquery';

const outputField = (pos: number = 250): JQuery => {
    return $(`<input value="${pos}" />`)
};

export default outputField;