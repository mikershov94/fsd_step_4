import $ from 'jquery';

const outputField = (pos: number = 250) => {
    return $(`<input value="${pos}" />`)
};

export default outputField;