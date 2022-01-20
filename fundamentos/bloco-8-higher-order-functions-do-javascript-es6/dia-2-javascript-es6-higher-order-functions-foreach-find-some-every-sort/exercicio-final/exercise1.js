const books = require('./template.js');

function authorBornIn1947(element) {
    const authorInfo = element.author;
    if (authorInfo.birthYear === 1947) return true;
}

console.log(books.find(authorBornIn1947).author.name);