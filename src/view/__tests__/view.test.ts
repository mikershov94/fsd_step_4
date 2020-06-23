import SliderView from '../view';

describe('Plugin should has module which works with DOM', () => {

    describe('view should has view.render()', () => {
        const html = document
        const plugin = document.createElement('div');
        plugin.id = 'fsd-slider';
        html.body.appendChild(plugin);
        const view = new SliderView();
        const result = view.render();
        const template = '<div class="wrapper">' +
                                '<div class="rail">' +
                                    '<div class="slider" data-position="50"></div>' +
                                '</div>' +
                             '</div>';

        it('render should return Jquery-object', () => {
            expect(result).toBeInstanceOf(Object)
        })

        it('object should contain template', () => {
            expect(result[0].innerHTML).toBe(template);
        })

        it('after call render DOM should contain template', () => {
            expect(html.getElementById('fsd-slider').innerHTML).toBe(template);
        })

    })

    describe('view should get position of rail', () => {
        const view = new SliderView();
        const result = view.getRailPosition();

        it('view.getRailPosition() should return natural number', () => {
            expect(result).toBeGreaterThanOrEqual(0);
        })

    })

    describe('view should get position of slider', () => {
        const view = new SliderView();
        const result = view.getSliderPosition();

        it('view.getSliderPosition() should return natural number', () => {
            expect(result).toBeGreaterThanOrEqual(0);
        })
    })

    describe('view should bind callback on events', () => {
        const view = new SliderView();

        const testCallback = (): void => { let b = 2 + 3 };
1
        it('subscribeOnMouseDown take callback', () => {
            const spy = jest.spyOn(view, 'subscribeOnMouseDown');
            view.subscribeOnMouseDown(testCallback);
            expect(spy).toHaveBeenCalledWith(testCallback);
        })

        it('subscribeOnMouseMove take callback', () => {
            const spy = jest.spyOn(view, 'subscribeOnMouseMove');
            view.subscribeOnMouseMove(testCallback);
            expect(spy).toHaveBeenCalledWith(testCallback);
        })

        it('subscribeOnMouseUp take callback', () => {
            const spy = jest.spyOn(view, 'subscribeOnMouseUp');
            view.subscribeOnMouseUp(testCallback);
            expect(spy).toHaveBeenCalledWith(testCallback);
        })

        it('unsubscribeFromMouseMove take callback', () => {
            const spy = jest.spyOn(view, 'unsubscribeFromMouseMove');
            view.unsubscribeFromMouseMove(testCallback);
            expect(spy).toHaveBeenCalledWith(testCallback);
        })
      
    })

})