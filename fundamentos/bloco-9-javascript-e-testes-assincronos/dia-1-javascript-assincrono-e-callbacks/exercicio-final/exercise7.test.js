const uppercase = require('./exercise7');

test('Testando se a frase fica em maiúsculo', (done) => {
  uppercase('testando a função', (result) => {
    try {
      expect(result).toBe('TESTANDO A FUNÇÃO');
      done();
    } catch (error) {
      done(error);
    }
  });  
});
