const books = require('./books.js');

const today = new Date().getFullYear();

function oldBooks(array) {
  // escreva seu código aqui: Crie um array com o nome de todos os livros com mais de 60 anos de publicação. 
  return today - array.releaseYear > 60;
}

const getOldBooks = books.filter(oldBooks);
console.log(getOldBooks.map((bookName) => bookName.name));
