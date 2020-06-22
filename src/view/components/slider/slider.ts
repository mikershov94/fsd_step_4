import $ from 'jquery';

const slider = (position: number = 50): JQuery => {
    return $(`<div class="slider" data-position="${position}"></div>`);
}

export default slider;