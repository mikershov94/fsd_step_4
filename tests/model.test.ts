import Slider from '../src/model';

describe('Testing model props', () => {
    class Slideric extends Slider {
        getProtectedStep(): number {
            return this._step;
        }
        setProtectedStep(value: number): number {
            this._step = value;
            return this._step;
        }
    }

    function setProp(value: number, obj: any, propName: string) {
        try {
            obj[propName] = value;
            return obj[propName];
        } catch (error) {
            return error;
        }
    };
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
        expect(setProp(-10, slider, 'position')).toBeInstanceOf(Error);
        expect(setProp(200, slider, 'position')).toBeInstanceOf(Error);
    });
    test('should be defined prop minimal limit', () => {
        const slider = new Slider();

        expect(getProp(slider, 'minLimit')).toBe(0);
        expect(setProp(25, slider, 'minLimit')).toBe(25);
        expect(setProp(-50, slider, 'minLimit')).toBe(-50);
    });
    test('should be defined prop maximum limit', () => {
        const slider = new Slider();

        expect(getProp(slider, 'maxLimit')).toBe(100);
        expect(setProp(200, slider, 'maxLimit')).toBe(200);
        expect(setProp(-10, slider, 'maxLimit')).toBe(-10);
    });
    test('should be defined protected prop step', () => {
        const slider = new Slider();
        const slideric = new Slideric();


        expect(getProp(slider, 'step')).toBeFalsy();
        expect(setProp(1, slider, 'step')).toBeInstanceOf(Error);
        expect(slideric.getProtectedStep()).toBeTruthy;
        expect(slideric.setProtectedStep(5)).toBe(5);
    })
})