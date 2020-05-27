import SliderView from '../src/view';


describe('Testing view.render()', () => {
    const testView = new SliderView();
;
    test('method render should be defined', () => {
        expect(testView.render()).toBeDefined();
    });
    test('method render should be call with arg position', () => {
        expect(testView.render()).toHaveBeenCalledWith(position)
    })
    test('method render should return HTML-template', () => {
        const $ = require('jquery');
        const template = '<div class="wrapper"><div class="rail"><div class="slider"></div></div></div>'

        expect($('fsd-slider').text()).toEqual(template)
    });
})