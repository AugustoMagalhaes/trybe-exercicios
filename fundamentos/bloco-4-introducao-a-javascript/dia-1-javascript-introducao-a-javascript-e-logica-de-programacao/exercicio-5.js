const firstTriangleDegree = 120;
const secondTriangleDegree = 60;
const thirdTriangleDegree = 20;
const sumOfDegrees = firstTriangleDegree + secondTriangleDegree + thirdTriangleDegree;
const degreesArray = [firstTriangleDegree, secondTriangleDegree, thirdTriangleDegree];

for (let degree of degreesArray) {
    if (typeof degree !== "number" || degree <= 0) {
        console.log("Erro")
    } 
}

if (sumOfDegrees === 180) {
    console.log(true)
} else if (sumOfDegrees !== 180) {
    console.log(false);
}
