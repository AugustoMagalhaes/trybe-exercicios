let idade = 30;

const nome: string = 'Jose';

enum daysOfWeek {
  domingo = 1,
  segunda,
  terça,
  quarta,
  quinta,
  sexta,
  sabado,
}

console.log('segunda', daysOfWeek.segunda);
console.log('dia de quarta', daysOfWeek[4]);
console.log('numero de sabado', daysOfWeek['sabado']);
console.log('dia de sabado', daysOfWeek[7]);
