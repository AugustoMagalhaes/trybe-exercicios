const books = require('./books.js');

const today = new Date().getFullYear();

function nameAndAge(array) {
  // escreva seu código aqui
  /* Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.  */
  return {
    age: today - array.releaseYear,
    author: array.author.name,
  };
}

console.log(books.map(nameAndAge));