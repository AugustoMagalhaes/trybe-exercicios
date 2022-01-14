const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const setProp = (obj, key, value) => {
  obj[key] = value;  
  return obj[key];
}

setProp(lesson2, 'turno', 'noite');
console.log('oi', lesson2);

const displayObjKeys = (obj) => {
  return Object.keys(obj);
}

console.log(displayObjKeys(lesson1));

const displayLength = (obj) => {
  return Object.keys(obj).length;
}

console.log(displayLength(lesson2));

const displayObjValues = (obj) => {
  return Object.values(obj);
}

console.log(displayObjValues(lesson3));

const allLessons = {};
// hard destructuring
[allLessons['lesson1'], allLessons['lesson2'], allLessons['lesson3']] = [{...lesson1}, {...lesson2}, {...lesson3}];
console.log(allLessons);
