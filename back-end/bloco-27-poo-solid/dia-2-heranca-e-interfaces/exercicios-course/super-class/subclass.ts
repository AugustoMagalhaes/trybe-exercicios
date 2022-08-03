import SuperClass from "./superclass";

export default class SubClass extends SuperClass {

  constructor() {
    super(false);
  }
}

const myFunc = (superclass: SuperClass) => {
  superclass.sayHello();
}

const firstClass = new SubClass();
const secClass = new SuperClass(true);


myFunc(firstClass);
myFunc(secClass);

console.log(firstClass.isSuper);
