const books = require('./books.js');

function authorWith3DotsOnName(array) {
  // escreva seu código aqui: Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais. 
  let first3TrueLetters = array.author.name.split('. ', 3);  
  return first3TrueLetters.join('').length === 3;
}

console.log(books.find(authorWith3DotsOnName).name);
