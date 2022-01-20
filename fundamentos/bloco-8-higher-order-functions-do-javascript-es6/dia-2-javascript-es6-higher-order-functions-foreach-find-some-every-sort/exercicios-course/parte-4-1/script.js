const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => {
  return ((element % 3 === 0) && (element % 5 === 0));
}

console.log(numbers.find(findDivisibleBy3And5));

// exercicio 2

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (element) => {
  return (element.length === 5);
}

console.log(names.find(findNameWithFiveLetters));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(song) {
  // Adicione seu código aqui  
  return (song.id === '31031685') ? true : false;
}

console.log(musicas.find(findMusic).title);

