var idade = 30;
var nome = 'Jose';
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["domingo"] = 1] = "domingo";
    daysOfWeek[daysOfWeek["segunda"] = 2] = "segunda";
    daysOfWeek[daysOfWeek["ter\u00E7a"] = 3] = "ter\u00E7a";
    daysOfWeek[daysOfWeek["quarta"] = 4] = "quarta";
    daysOfWeek[daysOfWeek["quinta"] = 5] = "quinta";
    daysOfWeek[daysOfWeek["sexta"] = 6] = "sexta";
    daysOfWeek[daysOfWeek["sabado"] = 7] = "sabado";
})(daysOfWeek || (daysOfWeek = {}));
console.log('segunda', daysOfWeek.segunda);
console.log('dia de quarta', daysOfWeek[4]);
console.log('numero de sabado', daysOfWeek['sabado']);
console.log('dia de sabado', daysOfWeek[7]);
var cardinalPoints;
(function (cardinalPoints) {
    cardinalPoints[cardinalPoints["N"] = 1] = "N";
    cardinalPoints[cardinalPoints["E"] = 2] = "E";
    cardinalPoints[cardinalPoints["S"] = 3] = "S";
    cardinalPoints[cardinalPoints["W"] = 4] = "W";
})(cardinalPoints || (cardinalPoints = {}));
console.log('norte', cardinalPoints.N);
console.log('Leste por chave', cardinalPoints['E']);
console.log('Sul por valor', cardinalPoints[3]);
console.log('Oeste', cardinalPoints.W);
