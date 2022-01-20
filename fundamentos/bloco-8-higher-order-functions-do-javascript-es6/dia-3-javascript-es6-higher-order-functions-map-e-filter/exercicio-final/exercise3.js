const books = require('./books.js');

function fantasyOrScienceFiction(array) {
  // escreva seu código aqui
  return (array.genre === 'Ficção Científica' || array.genre === 'Fantasia');
}

console.log(books.filter(fantasyOrScienceFiction));