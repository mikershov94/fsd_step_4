import SliderController from '../controller';
import SliderModel from '../../model/model';
import SliderView from '../../view/view';

describe('Plugin should has module which relate works with events', () => {
    const view = new SliderView();
    const model = new SliderModel();


    describe('module should has method which handle event MouseDown', () => {
        const controller = new SliderController(model, view);

        it('method should call view.subscribeOnMouseMove', () => {
            const spy = jest.spyOn(view, 'subscribeOnMouseMove');
            expect(spy).toHaveBeenCalled()
        })
    })
/*
    describe('module should has method which handle event MouseMove', () => {
        const controller = new SliderController(model, view);

        it('method should call view.subscribeOnMouseMove', () => {
            const spy = jest.spyOn(view, 'subscribeOnMouseMove');
            expect(spy).toHaveBeenCalled()
        })
    })
*/
    describe('module should has method which handle event MouseUp', () => {
        const controller = new SliderController(model, view);

        it('method should call view.unsubscribeFromMouseMove', () => {
            const spy = jest.spyOn(view, 'unsubscribeFromMouseMove');
            expect(spy).toHaveBeenCalled()
        })
    })

})