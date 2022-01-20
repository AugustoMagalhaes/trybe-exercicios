const books = require('./template');

let shortest = '';

function smallerName(element) {
    let nameBook;        
    // escreva aqui o seu código
    element.forEach((item, index) => {
        if (index === 0) {
            nameBook = item.name;
        } else {
            nameBook = (item.name.length > nameBook.length) ? nameBook : item.name;
        }        
    });    
     
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

console.log(smallerName(books));

/* books.forEach((nameBook) => {
    shortest = (nameBook.name.length > shortest.length) ? shortest : nameBook.name;
    console.log('name: ', nameBook.name.length, 'shortest', shortest);
    return shortest; 
}); */

