const { Slider } = require('../src/index');

describe('Slider object', () => {
    const slider = new Slider(50);

    test('should be defined prop position', () => {
        expect(slider.position).toBe(50);
    });

})