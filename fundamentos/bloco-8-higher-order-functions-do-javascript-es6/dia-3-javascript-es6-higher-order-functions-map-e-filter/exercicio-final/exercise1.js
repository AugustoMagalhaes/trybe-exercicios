const books = require('./books.js');

function formatedBookNames(array) {
  // escreva seu código aqui
  return array.name;
}

console.log(books.map(formatedBookNames));