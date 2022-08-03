import SuperClass from "./superclass";

export default class SubClass extends SuperClass {

  constructor(isSuper: boolean) {
    super(isSuper);
    super.isSuper = isSuper;
  }
}

const myFunc = (superclass: SuperClass) => {
  superclass.sayHello();
}

const firstClass = new SubClass(false);
const secClass = new SuperClass(true);


myFunc(firstClass);
myFunc(secClass);
