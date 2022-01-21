const books = require('./books.js');

function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui: Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. 
  return (array.genre === 'Ficção Científica' || array.genre === 'Fantasia');
}

const onlyNames = books.filter(fantasyOrScienceFictionAuthors).map((element) => element.author.name);
console.log(onlyNames.sort((a,b) => a.localeCompare(b)));

