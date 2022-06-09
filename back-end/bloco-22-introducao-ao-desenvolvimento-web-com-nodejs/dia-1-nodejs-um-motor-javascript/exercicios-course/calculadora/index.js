const operations = require('./operations');

const readline = require('readline-sync');

console.log('Calculadora simples: ');
console.log('--------------------------------------------');

const num1 = readline.questionInt('Digite um número: ');
const operator = readline.question('Digite a operação: +, -, *, / ');
const num2 = readline.questionInt('Digite outro número: ');

switch(operator) {
  case '+':
    operations.sum(num1, num2);
    break;
  case '-':
    operations.subtraction(num1, num2);
    break;
  case '*':
    operations.multiplication(num1, num2);
    break;
  case '/':
    operations.division(num1, num2);
    break;
  default:
    'A operação é desconhecida ou não foi implementada.'
}
