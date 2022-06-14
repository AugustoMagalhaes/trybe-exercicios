let randomArray = [];

for (let i = 1; i <= 25; i++) {
    randomArray.push(i);
}

let halfArray = [];

for (let element of randomArray) {
    halfArray.push(element/2);
}

console.log("Array com cada elemento original de randomArray dividido por 2: ", halfArray);