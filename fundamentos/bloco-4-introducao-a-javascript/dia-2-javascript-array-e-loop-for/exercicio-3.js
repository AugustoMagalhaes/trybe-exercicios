let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumAllNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    sumAllNumbers += numbers[index];
}

let arithmeticAverage = sumAllNumbers / numbers.length;
console.log("Média aritmética da array Numbers: ", arithmeticAverage);

// outra forma de calcular a média com loop for

let alternativeSum = 0;
let alternativeAverage = 0;
for (let index = 0; index < numbers.length; index++) {
    alternativeAverage += numbers[index] / numbers.length;
}

console.log("Outro jeito de calcular a média: ", alternativeAverage)