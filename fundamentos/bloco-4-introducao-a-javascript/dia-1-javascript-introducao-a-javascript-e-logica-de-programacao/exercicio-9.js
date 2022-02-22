const num1 = 4;
const num2 = 1;
const num3 = 7;


function checkEven (num) {
    return num % 2 !== 0;
}

if ( checkEven(num1) || checkEven(num2) || checkEven(num3)) {
    console.log(true);
} else {
    console.log(false);
}