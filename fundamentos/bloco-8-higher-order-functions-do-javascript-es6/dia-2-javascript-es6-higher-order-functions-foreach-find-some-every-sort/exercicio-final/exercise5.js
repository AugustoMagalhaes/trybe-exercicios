const books = require('./template.js');

function everyoneWasBornOnSecXX(element) {
  // escreva seu código aqui
  const year = element.author.birthYear;
  return (year > 1900 && year <= 2000);
}

console.log(books.every(everyoneWasBornOnSecXX));
