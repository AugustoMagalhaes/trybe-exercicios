const books = require('./books.js');

function formatedBookNames(array) {
  // escreva seu código aqui: Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
  return `${array.name} - ${array.genre} - ${array.author.name}`;
}

console.log(books.map(formatedBookNames));