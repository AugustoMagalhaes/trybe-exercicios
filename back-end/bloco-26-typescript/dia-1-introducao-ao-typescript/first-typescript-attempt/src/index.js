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
