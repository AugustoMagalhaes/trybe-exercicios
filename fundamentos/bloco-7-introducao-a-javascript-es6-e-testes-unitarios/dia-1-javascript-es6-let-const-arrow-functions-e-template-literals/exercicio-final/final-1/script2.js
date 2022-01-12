const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortedArray = oddsAndEvens.sort( (a,b)  => a - b);
const finalMessage = `Os números ${[...oddsAndEvens]} se encontram ordenados de forma crescente!`

console.log(finalMessage); 