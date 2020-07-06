import SliderView from '../view';
import $ from 'jquery'

describe('Plugin should has module which works with DOM', () => {

    describe('this module should has render method', () => {
        const html = document
        const plugin = document.createElement('div');
        plugin.id = 'fsd-slider';
        html.body.appendChild(plugin);
        const view = new SliderView();
        const result = view.render();
        const template = '<div class="container">' +
                            '<div class="wrapper">' +
                                '<div class="rail"></div>' +
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

    describe('view should bind callback on events', () => {
        const view = new SliderView();

        const testCallback = jest.fn();
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