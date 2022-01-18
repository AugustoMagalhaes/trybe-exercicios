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

describe('Testando se a saida de encode equivale a entrada de decode e vice versa', () => {
    it('Testa se as vogais a,e,i,o,u sao convertidas em 1,2,3,4,5 pela funçao encode', () => {
        expect(encode('aeiou')).toMatch('12345');
    });

    it('Testa se a string "1,2,3,4,5" é convertida em "aeiou" por decode', () => {
        expect(decode('12345')).toMatch('aeiou');
    });
});

describe('Testa se as saidas sao unicas', () => {
    it('Testa se as vogais a,e,i,o,u nao sao convertidas em outros numeros pela funçao encode', () => {
        expect(encode('aeiou')).not.toMatch('13245');
        expect(encode('aeiou')).not.toMatch('21345');
        expect(encode('aeiou')).not.toMatch('32145');
        expect(encode('aeiou')).not.toMatch('54123');
        expect(encode('aeiou')).not.toMatch('42135');
    });

    it('Testa se os numeros 1,2,3,4,5 nao sao convertidos em outras vogais pela funçao decode', () => {
        expect(decode('12345')).not.toMatch('aieou');
        expect(decode('12345')).not.toMatch('iaeou');
        expect(decode('12345')).not.toMatch('aueoi');
        expect(decode('12345')).not.toMatch('aaeou');
        expect(decode('12345')).not.toMatch('eaoou');
    })
})