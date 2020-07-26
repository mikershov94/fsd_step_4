import $ from 'jquery';

class ProgressBar {

    private element: JQuery;

    constructor() {
        this.element = $('<div class="progress-bar"></div>')
    }

    mount(): JQuery {
        return this.element;
    }

}

export default ProgressBar;