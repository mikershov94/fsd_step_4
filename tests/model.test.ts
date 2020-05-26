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

    //тестирование записи свойства в объект
    function setProp(value: number, obj: any, propName: string) {
        try {
            obj[propName] = value;
            return obj[propName];
        } catch (error) {
            return error;
        }
    };

    //тестирование чтения свойства из объекта
    function getProp(obj: any, propName: string): number | any {
        try {
            return obj[propName];
        } catch (error) {
            throw error;
        }
    };

    test('should be defined prop position of slider', () => {
        const slider = new Slider();

        expect(getProp(slider, 'position')).toBeTruthy();
        expect(setProp(25, slider, 'position')).toBe(25);
        expect(setProp(0, slider, 'position')).toBe(0);
        expect(setProp(100, slider, 'position')).toBe(100);
    });
    test('prop position should be more than min limit', () =>{
        const slider = new Slider();

        expect(setProp(-10, slider, 'position')).toBeInstanceOf(Error);
    });
    test('prop position should be less than max limit', () => {
        const slider = new Slider();

        expect(setProp(200, slider, 'position')).toBeInstanceOf(Error);
    });
    test('should be defined prop step', () => {
        const slider = new Slider();
        
        expect(getProp(slider, 'step')).toBeGreaterThanOrEqual(0);
        expect(setProp(1, slider, 'step')).toBe(1);
    });
    test('prop step should be more than zero', () => {
        const slider = new Slider();
        
        expect(setProp(-1, slider, 'step')).toBeInstanceOf(Error);
    });
})