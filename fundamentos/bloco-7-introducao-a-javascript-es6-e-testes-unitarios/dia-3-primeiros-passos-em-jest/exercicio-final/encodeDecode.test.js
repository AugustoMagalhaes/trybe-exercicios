const {encode, decode} = require('./encodeDecode.js');
/* const decode = require('./encodeDecode.js'); */

describe('Testando as funçoes encode e decode', () => {
    it('Testa se encode é uma funçao', () => {
        expect(typeof encode).toMatch('function');        
    });

    it('Testa se decode é uma função', () => {
        expect(typeof decode).toMatch('function');
    });
});

describe('Testando se a saida de encode equivale a entrada de decode', () => {
    it('Testa se as vogais a,e,i,o,u sao convertidas em 1,2,3,4,5 pela funçao encode', () => {
        expect(encode('aeiou')).toMatch('12345');
    });

    it('Testa se a string "1,2,3,4,5" é convertida em "aeiou" por decode', () => {
        expect(decode('12345')).toMatch('aeiou');
    });
})