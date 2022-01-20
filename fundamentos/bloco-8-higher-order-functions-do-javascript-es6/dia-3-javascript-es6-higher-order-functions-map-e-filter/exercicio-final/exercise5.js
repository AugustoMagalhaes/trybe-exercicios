const books = require('./books.js');

function fantasyOrScienceFictionAuthors(array) {
  // escreva seu código aqui
  return (array.genre === 'Ficção Científica' || array.genre === 'Fantasia');
}

const onlyNames = books.filter(fantasyOrScienceFictionAuthors).map((element) => element.author.name);
console.log(onlyNames.sort((a,b) => a.localeCompare(b)));

