let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countOddNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        countOddNumbers++;
    }
}

let result = (countOddNumbers > 0) ? `Existem ${countOddNumbers} números ímpares na array.` : `Não existem números ímpares na array.`;
console.log(result);

