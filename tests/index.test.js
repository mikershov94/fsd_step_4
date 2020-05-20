import {expect} from 'chai';
import {hello} from '../src/lib.js'

describe("проверка тестовой функции", function() {
    it("функция должна возвращать 9", function() {
        expect(hello()).to.equal(9);
    })
})