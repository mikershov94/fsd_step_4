import $ from 'jquery';

class Container {

    render(): JQuery {
        return $('<div class="container"></div>');
    }

}

export default Container;