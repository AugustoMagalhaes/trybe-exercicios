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
console.log(lesson2);

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
// hardcode destructuring
[allLessons['lesson1'], allLessons['lesson2'], allLessons['lesson3']] = [{...lesson1}, {...lesson2}, {...lesson3}];
console.log(allLessons);

const getAmountOfStudents = (obj) => {
  let amountStudents = 0;
  for (let key of Object.keys(obj)) {
    amountStudents += obj[key]['numeroEstudantes']
  }  
  return amountStudents;
}

console.log('quantidade de estudantes: ', getAmountOfStudents(allLessons));

const getValueByNumber = (obj, index) => {
  const objKeys = Object.keys(obj);
  return objKeys[index];
}

console.log(getValueByNumber(lesson2, 2));

const verifyPair = (obj, key, value) => {
  return (obj[key] === value) ? true : false;
}

console.log(verifyPair(lesson1, 'turno', 'manhã'));
console.log(verifyPair(lesson1, 'turno', 'noite'));