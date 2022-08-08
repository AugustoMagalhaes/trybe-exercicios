type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

function setApproved(students: Array<Student>) {
  const studentsWithLetterGrade = students.map((student) => {
    const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
      if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
      else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
      else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
      else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
      else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
      else discipline.letterGrade = 'F';

      return discipline;
    });

    return {
      name: student.name,
      disciplines: disciplinesWithLetterGrade,
    };
  });

  const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
    disciplines.every((discipline) => discipline.grade > 0.7));

  approvedStudents.map(({ name, disciplines }) => {
    console.log(`A pessoa com nome ${name} foi aprovada!`);
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  });
}

const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);