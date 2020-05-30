import Slider from '../src/model';

describe('Testing model constructor', () => {
    test('constructor should be take minLimit, maxLimit and step', () => {
        expect(new Slider()).toEqual({
            minLimit: 0,
            maxLimit: 100,
            _step: 0,
            _position: 50
        });
        expect(new Slider(50, 150, 2)).toEqual({
            minLimit: 50,
            maxLimit: 150,
            _step: 2,
            _position: 100
        })
    });
    

});

describe('Testing model props', () => {


    test('should be defined prop position of slider', () => {
        const model = new Slider();

        expect(model.getPosition()).toBeTruthy();
        model.setPosition(25);
        expect(model.getPosition()).toBe(25);
        model.setPosition(0);
        expect(model.getPosition()).toBe(0);
        model.setPosition(100);
        expect(model.getPosition()).toBe(100);
    });
    test('prop position should be more than min limit', () =>{
        const model = new Slider();
        const callSetPosition = (value: number) => {
            try {
                model.setPosition(value);
            } catch (error) {
                return error
            }
        }

        expect(callSetPosition(-100)).toBeInstanceOf(Error);
    });
    test('prop position should be less than max limit', () => {
        const model = new Slider();
        const callSetPosition = (value: number) => {
            try {
                model.setPosition(value);
            } catch (error) {
                return error
            }
        }

        expect(callSetPosition(200)).toBeInstanceOf(Error);
    });
    test('should be defined prop step', () => {
        const model = new Slider();
        
        expect(model.getStep()).toBeGreaterThanOrEqual(0);
        model.setStep(1)
        expect(model.getStep()).toBe(1);
    });
    test('prop step should be more than zero', () => {
        const model = new Slider();
        const callSetStep = (value: number) => {
            try {
                model.setStep(value);
            } catch (error) {
                return error
            }
        }
        
        expect(callSetStep(-1)).toBeInstanceOf(Error);
    });
})