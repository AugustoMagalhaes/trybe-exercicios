const num1 = 6;
const num2 = 2;
const num3 ; 5;

let higherNumber = null;

if (num1 > num2) {
    higherNumber = num1;
} else {
    higherNumber = num2;
}

let higherNumOfThree = null;

if (num1 > num2 && num1 > num2) {
   higherNumOfThree = num1;
} else if (num2 > num1 && num2 > num3) {
    higherNumOfThree = num2;
} else {
    higherNumOfThree = num3;
}

console.log("maior número entre os três: ", higherNumOfThree)




