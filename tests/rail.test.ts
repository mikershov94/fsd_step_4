const { Rail } = require('../src/index');

describe('Rail object', () => {
    const rail = new Rail(0, 100, 1);

    test('should be defined prop minimal limit', () => {
        expect(rail.minLimit).toBe(0);
    });
    test('should be defined prop maximum limit', () => {

    });
    test('should be defined prop step', () => {

    });

})