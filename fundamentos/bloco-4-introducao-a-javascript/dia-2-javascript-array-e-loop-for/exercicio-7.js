let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] <= smallestNumber) {
        smallestNumber = numbers[index];
    }
    
}

console.log("O menor número de numbers: ", smallestNumber);



