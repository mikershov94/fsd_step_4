import {expect} from 'chai';
import {hello} from '../src/lib'

describe(<string>"проверка тестовой функции", function(): void {
    it(<string>"функция должна возвращать 9", function(): void {
        expect(hello()).to.equal(9);
    })
})