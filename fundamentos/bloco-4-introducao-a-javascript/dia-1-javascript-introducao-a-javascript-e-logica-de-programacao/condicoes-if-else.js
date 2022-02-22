const studentsGrade = 65;

if (studentsGrade > 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (studentsGrade >= 60 && studentsGrade < 80) {
    console.log("Você está na nossa lista de espera" );
} else {
    console.log("Você foi reprovada(o)");
}

const date = new Date();
const actualYear = date.getFullYear();

if (actualYear % 4 === 0) {
    console.log("Este ano tem eleições municipais.")
} else if (actualYear % 4 === 2) {
    console.log("Este ano tem eleições federais.");
}

