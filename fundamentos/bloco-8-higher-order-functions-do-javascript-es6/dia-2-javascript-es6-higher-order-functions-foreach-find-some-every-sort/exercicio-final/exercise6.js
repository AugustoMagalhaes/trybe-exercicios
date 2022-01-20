const books = require('./template.js');

function someBookWasReleaseOnThe80s(element) {
  // escreva seu código aqui
  const release = element.releaseYear;
  return (release >= 1980 && release < 1990);
}

console.log(books.some(someBookWasReleaseOnThe80s));