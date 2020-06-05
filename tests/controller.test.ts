import SliderController from '../src/controller';
import SliderModel from '../src/model';
import SliderView from '../src/view';

describe('Test controller', () => {
    
    const model = new SliderModel();
    const view  = new SliderView();
    view.render();

    const mouseDown = new Event('mousedown');
    const mouseMove = new Event('mousemove');
    const mouseUp = new Event('mouseup');
    
    test('constructor should call method subscribeOnMouseDown in view', () => {
        const mockBindHandlerMouseDown = jest.spyOn(view, 'subscribeOnMouseDown');
        const controller = new SliderController(model, view);

        expect(mockBindHandlerMouseDown).toHaveBeenCalled();
    })

    test('controller should has handler mousedown on slider', () => {
        const controller = new SliderController(model, view);
        const mockBindHandlerMove = jest.spyOn(view, 'subscribeOnMouseMove');

        controller.onMouseDownSlider(mouseDown)
        expect(mockBindHandlerMove).toHaveBeenCalled();
    });

    describe('controller should has handler mousemove-event', () =>{
        const mockGetRailPosition = jest.spyOn(view, 'getRailPosition');
        const mockGetSliderPosition = jest.spyOn(view, 'getSliderPosition');
        const mockSetPosition = jest.spyOn(model, 'setPosition');
        const controller = new SliderController(model, view);
        controller.onMoveSlider(mouseMove)
        
        test('handler should call view-method getRailPosition', () => {
            expect(mockGetRailPosition).toHaveBeenCalled();
        });
        test('handler should call view-method getSliderPosition', () => {
            expect(mockGetSliderPosition).toHaveBeenCalled();
        });
        test('handler should call model-method setPosition', () => {
            expect(mockSetPosition).toHaveBeenCalled();
        });
    });

    test('controller should has handler mouseup on document after slider-move', () => {
        const controller = new SliderController(model, view);
        const mockBindHandlerMouseUp = jest.spyOn(view, 'subscribeOnMouseUp');

        controller.onMouseUpSlider(mouseUp)
        expect(mockBindHandlerMouseUp).toHaveBeenCalled();
    })

});