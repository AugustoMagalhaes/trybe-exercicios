const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testando vários retornos da funçao "myFizzBuzz" ', () => {
    it('Checa se myFizzBuzz(15) retorna "fizzbuzz', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });

    it('Checa se myFizzBuzz(6) retorna "fizz', () => {
        expect(myFizzBuzz(6)).toMatch('fizz');
    });

    it('Checa se myFizzBuzz(25) retorna "buzz', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    });

    it('Checa se myFizzBuzz(7) retorna o proprio numero', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Checa se myFizzBuzz("teste") retorna false', () => {
        expect(myFizzBuzz('teste')).toBeFalsy();
    });
});