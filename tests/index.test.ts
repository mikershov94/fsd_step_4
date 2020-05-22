const {hello} = require('../src/lib'); 

test('проверка тестовой функции', () => {
    expect(hello()).toBe(9);
});