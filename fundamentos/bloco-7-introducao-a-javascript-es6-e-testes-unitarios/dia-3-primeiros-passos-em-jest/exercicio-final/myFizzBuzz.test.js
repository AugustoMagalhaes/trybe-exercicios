const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testando vários retornos da funçao "myFizzBuzz" ', () => {
    it('Checa se myFizzBuzz(15) retorna "fizzbuzz', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    })
});