const sum = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

const subtraction = (num1, num2) => {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

const multiplication = (num1, num2) => {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

const division = (num1, num2) => {
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

module.exports = { sum, subtraction, multiplication, division };
