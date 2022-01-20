const books = require('./template.js');

books.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(books);