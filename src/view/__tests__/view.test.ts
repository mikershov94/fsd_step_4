import SliderView from '../view';

describe('Testing view', () => {

    describe('view should has view.render()', () => {
        const view = new SliderView()

        it('render should return Jquery-object', () => {
            console.log(view.render())
        })

    })

})