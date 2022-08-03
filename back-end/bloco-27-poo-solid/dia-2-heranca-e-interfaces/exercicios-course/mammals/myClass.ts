import MyInterface from "./myInterface";

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));