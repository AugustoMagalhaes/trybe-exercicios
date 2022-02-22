let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientAge); //undefined por padrão.|

patientId = '50';
console.log(typeof patientId);

let base = 5;
let height = 8;
const area = base * height;
const perimeter = (2 * base) + ( 2 * height);
console.log("area: ", area);
console.log("perimetro: ", perimeter);

