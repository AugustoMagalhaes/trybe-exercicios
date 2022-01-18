const encode = require('./encodeDecode.js');
const decode = require('./encodeDecode.js');

describe('Testando as funçoes encode e decode', () => {
    it('Testa se encode é uma funçao', () => {
        expect(typeof encode).toMatch('function');        
    });

    it('Testa se decode é uma função', () => {
        expect(typeof decode).toMatch('function');
    })
})