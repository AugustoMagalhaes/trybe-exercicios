const books = require('./books.js');

const today = new Date().getFullYear();

function nameAndAge(array) {
  // escreva seu código aqui
  return {
    age: (today - array.releaseYear),
    author: array.author.name,
  }
}

console.log(books.map(nameAndAge));