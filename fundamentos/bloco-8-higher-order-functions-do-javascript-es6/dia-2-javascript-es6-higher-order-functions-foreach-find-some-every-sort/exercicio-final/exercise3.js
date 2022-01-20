const books = require('./template.js');

function getNamedBook(element) {
    // escreva seu código aqui
    const authorBook = element.name;
    return (authorBook.length === 26);
}

console.log(books.find(getNamedBook).name);