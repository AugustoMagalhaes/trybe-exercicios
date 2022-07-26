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

enum cardinalPoints {
  N = 1,
  E,
  S,
  W,
}

console.log('norte', cardinalPoints.N);
console.log('Leste por chave', cardinalPoints['E']);
console.log('Sul por valor', cardinalPoints[3]);
console.log('Oeste', cardinalPoints.W);
console.log(cardinalPoints);
