import Slider from '../src/model';

describe('Testing model props', () => {
    const slider = new Slider();

    test('should be defined prop position of slider', () => {
        expect(slider.position).toBe(50);
        slider.position = 25;
        expect(slider.position).toBe(25);
        slider.position = 0;
        expect(slider.position).toBe(0);
        slider.position = 100;
        expect(slider.position).toBe(100);
        slider.position = -10;
        expect(slider.position).toBe(0);
        slider.position = 200
        expect(slider.position).toBe(100)
    });
    test('should be defined prop minimal limit', () => {
        expect(slider.minLimit).toBe(0);
        slider.minLimit = -50;
        expect(slider.minLimit).toBe(-50);
        slider.minLimit = 25;
        expect(slider.minLimit).toBe(25);
    });
    test('should be defined prop maximum limit', () => {
        expect(slider.maxLimit).toBe(100);
        slider.maxLimit = 50;
        expect(slider.maxLimit).toBe(50);
        slider.maxLimit = 200;
        expect(slider.maxLimit).toBe(200);
    })
})