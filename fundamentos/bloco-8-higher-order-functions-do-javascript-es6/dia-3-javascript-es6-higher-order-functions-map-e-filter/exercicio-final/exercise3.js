const books = require('./books.js');

function fantasyOrScienceFiction(array) {
  // escreva seu código aqui: Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia. 
  return (array.genre === 'Ficção Científica' || array.genre === 'Fantasia');
}

console.log(books.filter(fantasyOrScienceFiction));