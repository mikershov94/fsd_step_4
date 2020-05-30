import SliderController from '../src/controller';
import SliderModel from '../src/model';
import SliderView from '../src/view';

describe('Test controller', () => {
    
    const model = new SliderModel();
    const view  = new SliderView()
    const controller = new SliderController(model, view);
    const mouseDown = new Event('mousedown');
    const mouseMove = new Event('mousemove');
    const mouseUp = new Event('mouseup');

    test('controller should has handler mousedown on slider', () => {
        const mockBindHandlerMove = jest.spyOn(view, 'bindHandlerMove');

        controller.onMouseDownSlider(mouseDown)
        expect(mockBindHandlerMove).toHaveBeenCalled();
    });

    test('controller should has handler move on document after slider-click', () => {
        const mockSetPosition = jest.spyOn(model, 'setPosition');
        
        controller.onMoveSlider(mouseMove);
        expect(mockSetPosition).toHaveBeenCalled()
    });
    test('controller should has handler mouseup on document after slider-move', () => {
        const mockBindHandlerMouseUp = jest.spyOn(view, 'unbindHandlerUp');

        controller.onMouseUpSlider(mouseUp)
        expect(mockBindHandlerMouseUp).toHaveBeenCalled();
    })

});