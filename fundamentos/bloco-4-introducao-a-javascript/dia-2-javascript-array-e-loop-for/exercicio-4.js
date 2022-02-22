let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumAllNumbers = 0;

for (let index = 0; index < numbers.length; index++) {
    sumAllNumbers += numbers[index];
}

let arithmeticAverage = sumAllNumbers / numbers.length;
console.log("Média aritmética da array Numbers: ", arithmeticAverage);

if (arithmeticAverage > 20) {
    console.log("O valor é maior que 20.");
} else {
    console.log("O valor é menor que 20.");
}