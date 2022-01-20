const books = require('./template.js');

function authorUnique(item) { 
  return (birth.indexOf(item) === birth.lastIndexOf(item));
}

let birth = [];
books.forEach((element) => birth.push(element.author.birthYear));


console.log(birth.every(authorUnique));