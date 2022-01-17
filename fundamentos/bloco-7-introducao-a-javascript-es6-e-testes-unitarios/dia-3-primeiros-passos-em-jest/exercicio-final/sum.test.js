const { expect } = require('@jest/globals');
const sum = require('./sum.js');

describe('Testando a funçao sum', () => {
    test('Testando se sum(4,5) é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });
})