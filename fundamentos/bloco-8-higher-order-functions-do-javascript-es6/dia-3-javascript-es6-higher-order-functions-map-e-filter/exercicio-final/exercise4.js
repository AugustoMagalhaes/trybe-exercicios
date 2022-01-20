const books = require('./books.js');

const today = new Date().getFullYear();

function oldBooksOrdered(array) {
  // escreva seu código aqui
  return today - array.releaseYear > 60;
}

const oldBooks = books.filter(oldBooksOrdered);

console.log(oldBooks.sort( (a, b) => a.releaseYear - b.releaseYear));