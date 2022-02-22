let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let multipliedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index + 1] != undefined) {
    let elementMultipliedArray = numbers[index] * numbers[index + 1];
    multipliedNumbers.push(elementMultipliedArray);
  } else {
    let lastElementMultipliedNumbers = numbers[index] * 2;
    multipliedNumbers.push(lastElementMultipliedNumbers);
  }
}

  console.log(multipliedNumbers);