"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `myNumber + myParam: ${this.myNumber + myParam}`;
    }
}
const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));
