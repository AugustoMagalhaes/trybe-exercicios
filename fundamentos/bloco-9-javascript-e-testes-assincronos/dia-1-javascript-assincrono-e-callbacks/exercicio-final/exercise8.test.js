// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, displayMessage } = require("./exercise8.js");

describe("A função getPokemonDetails", (done) => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charizard', callback); 
    
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedMessage = displayMessage(null, `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`);
    expect(expectedMessage).toBeTruthy();
    done();
  });
});