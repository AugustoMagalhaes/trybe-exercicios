const books = require('./books.js');

const today = new Date().getFullYear();

function oldBooksOrdered(array) {
  // escreva seu código aqui: Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho. 
  return today - array.releaseYear > 60;
}

const oldBooks = books.filter(oldBooksOrdered);

console.log(oldBooks.sort( (a, b) => a.releaseYear - b.releaseYear));