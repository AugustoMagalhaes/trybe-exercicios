const { expect } = require('@jest/globals');
const sum = require('./sum.js');

describe('Testando a funçao sum', () => {
    it('Testando se sum(4,5) é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Testando se sum(0,0) é igual a 0', () => {
        expect(sum(0,0)).toBe(0);
    });

    it('Testando se um erro é lançado quando um dos argumentos é do tipo string', () => {
        expect( () => {
            sum(4,'5');
        }).toThrow();        
    })
})