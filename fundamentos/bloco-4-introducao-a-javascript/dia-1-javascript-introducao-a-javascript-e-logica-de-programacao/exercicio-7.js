const studentsGrade = 50;
let comparisonGrade = null;

function booleanComparison (comparisonGrade) {
    return (studentsGrade < 50) ? false : studentsGrade >= comparisonGrade;
} 

switch(true) {
    case booleanComparison(90):
        console.log("A");
        break;
    case booleanComparison(80):
        console.log("B");
        break;
    case booleanComparison(70):
        console.log("C");
        break;
    case booleanComparison(60):
        console.log("D");
        break;
    case booleanComparison(50):
        console.log("E");
        break;
    case !booleanComparison(50):
        console.log("F");
        break;
    default:
        console.log("Valor inválido.");    
}

