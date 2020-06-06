import SliderView from '../src/view';
import $ from 'jquery';


describe('Testing view', () => {
    let browser: any;
    let page: any;
    
    test('view should render HTML-markup to div#fsd-slider', () => {
        const plugin = $('<div>', {
            id: 'fsd-slider'
        }).appendTo(document.body)

        const view = new SliderView();
        view.render();
    
        expect(plugin[0].innerHTML).toEqual(`<div class="wrapper">` +
                                                `<div class="rail">` +
                                                    `<div class="slider" data-position="50"></div>` +
                                                `</div>` +
                                            `</div>`);
    });

    test('view should return left offset of rail', () => {
        const plugin = $('<div>', {
            id: 'fsd-slider'
        }).appendTo(document.body);

        const view = new SliderView();
        view.render();

        plugin.find('.rail').offset({
            top: 0,
            left: 100
        })

        expect(view.getRailPosition()).toBe(100);     
    });

    test('', () => {});
})